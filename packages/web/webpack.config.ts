import { resolve } from "path";
import { EnvironmentPlugin } from "webpack";
import {
  type Configuration,
  type ExpressRequestHandler,
} from "webpack-dev-server";
import { type CallableOption } from "webpack-cli";
// import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import env from "dotenv";

const CopyWebpackPlugin = require("copy-webpack-plugin");

env.config({ path: resolve(__dirname, "../../.env") });

// https://github.com/webpack/webpack-dev-middleware#server-side-rendering
function normalizeAssets(assets: unknown) {
  return Array.isArray(assets) ? assets : [assets];
}

const middleware: ExpressRequestHandler = (_req, res) => {
  const { devMiddleware } = res.locals.webpack;
  const { outputFileSystem, stats } = devMiddleware;
  const { assetsByChunkName, outputPath } = stats.toJson();

  // Then use `assetsByChunkName` for server-side rendering
  // For example, if you have only one main chunk:
  res.send(`
<html>
  <head>
    <title>My App</title>
    <style>
    ${normalizeAssets(assetsByChunkName.main)
      .filter((path) => path.endsWith(".css"))
      .map((path) => outputFileSystem.readFileSync(path.join(outputPath, path)))
      .join("\n")}
    </style>
  </head>
  <body>
    <div id="root"></div>
    ${normalizeAssets(assetsByChunkName.main)
      .filter((path) => path.endsWith(".js"))
      .map((path) => `<script src="${path}"></script>`)
      .join("\n")}
  </body>
</html>
  `);
};

export default (async (
  { WEBPACK_SERVE } = {},
  { mode },
  _dev = mode === "development"
) =>
  Object.assign(
    {
      target: "web",
      entry: {
        main: require.resolve("./src"),
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            // loader: "ts-loader",
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
      output: {
        path: resolve(__dirname, "public"),
        clean: true,
      },
      plugins: [
        new CopyWebpackPlugin({
          patterns: [
            {
              context: resolve(__dirname, "src/assets"),
              from: WEBPACK_SERVE ? "none" : "api/**/*.json",
              noErrorOnMissing: true,
            },
          ],
        }),
        new EnvironmentPlugin({}),
        // https://webpack.js.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
          favicon: require.resolve("./src/assets/favicon.ico"),
        }),
      ].filter(Boolean),
    },
    WEBPACK_SERVE
      ? {
          devServer: {
            static: false,
            client: {
              overlay: false,
            },
            devMiddleware: {
              index: true, // specify to enable root proxying
              serverSideRender: true,
            },
            setupMiddlewares: (
              ({ router }) =>
              (middlewares) =>
                middlewares.concat(router).concat(middleware)
            )(await import("@dev/app")),
          } as Configuration,
        }
      : {}
  )) as CallableOption;
