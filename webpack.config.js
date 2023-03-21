const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/landing/main.ts",
    register: "./src/register/register.ts",
    feed: "./src/feed/feed.ts",
    changepassword: "./src/changepassword/changepassword.ts",
    newpost: "./src/newpost/newpost.ts"

  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[name].[ext]",
      //     outputPath: "assets/",
      //   },
      // },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'assets/[name].[ext]',
        },
      },
      

      { test: /\.html$/, loader: "html-loader" },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      fs: require.resolve("fs"),
      '@': path.resolve(__dirname, 'src'), 

    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/landing/index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/register/register.html",
      filename: "register.html",
      chunks: ["register"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/feed/feed.html",
      filename: "feed.html",
      chunks: ["feed"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/changepassword/changepassword.html",
      filename: "changepassword.html",
      chunks: ["changepassword"],
    }),

    ////

    new HtmlWebpackPlugin({
      template: "./src/newpost/newpost.html",
      filename: "newpost.html",
      chunks: ["newpost"],
    }),

    /////
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./src"),
    },
    compress: true,
    port: 9000,
  },
};
