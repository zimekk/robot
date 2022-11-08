import path from "path";
import webpack from "webpack";
import env from "dotenv";

env.config({ path: path.resolve(__dirname, "../../.env") });

export default (env, { mode }, dev = mode === "development") => ({
  target: "web",
  devtool: dev ? "eval-cheap-source-map" : "source-map",
  entry: {
    main: require.resolve("./src"),
    // : require.resolve("./src"),
    sw: require.resolve("./src/service-worker"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
              },
            },
          },
        ],
      },
      {
        test: /\.(mp3|ogg|png|avi)$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          plugins: [].concat(dev ? "react-hot-loader/babel" : []),
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      events: "events",
      "react-dom": "@hot-loader/react-dom",
    },
    // https://webpack.js.org/configuration/resolve/#resolvefallback
    fallback: {
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({}),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    // https://webpack.js.org/plugins/copy-webpack-plugin/
    // new (require("copy-webpack-plugin"))({
    //   patterns: [
    //     { from: require.resolve("./src/manifest.json"),       },
    //   ],
    // }),
    // https://github.com/jantimon/favicons-webpack-plugin#basic
    new (require("favicons-webpack-plugin"))({
      logo: require.resolve("./src/assets/favicon.ico"),
      // https://web.dev/add-manifest/
      // https://felixgerschau.com/how-to-make-your-react-app-a-progressive-web-app-pwa/#adding-a-manifest-file
      manifest: require.resolve("./src/assets/manifest.json"),
      mode: "light",
    }),
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new (require("html-webpack-plugin"))({
      title: require("./src/assets/manifest").name,
      excludeChunks: ["sw"],
      // favicon: require.resolve("./src/assets/favicon.ico"),
    }),
    // !dev &&
    //   new (require("workbox-webpack-plugin").InjectManifest)({
    //     swSrc: require.resolve("./src/service-worker"),
    //     swDest: "sw.js",
    //   }),
  ].filter(Boolean),
});
