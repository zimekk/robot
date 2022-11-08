import path from "path";
import express, { Router } from "express";

export const router = Router()
  .use("/api", (_req, res) => res.json({ hello: "Hello" }))
  .use(require("./push").default());

class Server {
  app: Object;
  options: Object;

  constructor(options = {}) {
    this.options = options;

    if (typeof options.setupExitSignals === "undefined") {
      options.setupExitSignals = true;
    }
  }

  async initialize() {
    this.setupApp();
    this.setupMiddlewares();
    this.createServer();

    if (this.options.setupExitSignals) {
      const signals = ["SIGINT", "SIGTERM"];
      const exitProcess = () => process.exit();
      signals.forEach((signal) => {
        process.on(signal, () => this.stopCallback(exitProcess));
      });
    }
  }

  setupApp() {
    this.app = new express();
  }

  setupMiddlewares() {
    let middlewares = [];

    if (/** @type {NormalizedStatic[]} */ this.options.static.length > 0) {
      /** @type {NormalizedStatic[]} */
      this.options.static.forEach((staticOption) => {
        staticOption.publicPath.forEach((publicPath) => {
          middlewares.push({
            name: "express-static",
            path: publicPath,
            middleware: express.static(
              staticOption.directory,
              staticOption.staticOptions
            ),
          });
        });
      });
    }

    if (typeof this.options.setupMiddlewares === "function") {
      middlewares = this.options.setupMiddlewares(middlewares, this);
    }

    middlewares.forEach((middleware) => {
      if (typeof middleware === "function") {
        /** @type {import("express").Application} */
        this.app.use(middleware);
      } else if (typeof middleware.path !== "undefined") {
        /** @type {import("express").Application} */
        this.app.use(middleware.path, middleware.middleware);
      } else {
        /** @type {import("express").Application} */
        this.app.use(middleware.middleware);
      }
    });
  }

  createServer() {
    this.server = require("http").createServer(this.app);
    this.server.on("error", (error) => {
      throw error;
    });
  }

  async start() {
    this.logger = console;

    await this.initialize();

    const listenOptions = { host: this.options.host, port: this.options.port };

    await new Promise((resolve) => {
      this.server.listen(listenOptions, () => {
        resolve();
      });
    });

    if (typeof this.options.onListening === "function") {
      this.options.onListening(this);
    }
  }

  async stop() {
    if (this.server) {
      await new Promise((resolve) => {
        this.server.close(() => {
          this.server = null;

          resolve();
        });

        for (const socket of this.sockets) {
          socket.destroy();
        }

        this.sockets = [];
      });

      if (this.middleware) {
        await new Promise((resolve, reject) => {
          this.middleware.close((error) => {
            if (error) {
              reject(error);

              return;
            }

            resolve();
          });
        });

        this.middleware = null;
      }
    }
  }

  stopCallback(callback) {
    this.stop().then(() => callback(null), callback);
  }
}

// https://stackoverflow.com/questions/6398196/detect-if-called-through-require-or-directly-by-command-line
if (process.mainModule.filename === __filename) {
  const defaultOptionsForStatic = {
    directory: path.join(process.cwd(), "public"),
    staticOptions: {},
    publicPath: ["/"],
    serveIndex: { icons: true },
  };

  const middleware = router;

  const server = new Server({
    port: 8080,
    static: [defaultOptionsForStatic],
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }
      devServer.app.use(require("morgan")("combined")).use(middleware);
      return middlewares;
    },
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      const port = devServer.server.address().port;
      console.log(`Listening on port: ${port}`);
    },
  });

  server.start();
}
