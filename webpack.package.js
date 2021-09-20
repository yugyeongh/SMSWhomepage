const path = require("path");
const isProd = env.NODE_ENV === 'production';
const HtmlWebPackPlugin = require("html-webpack-plugin");
// html 파일 추출 플러그인입니다
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css 파일 추출 플러그인입니다
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// build 폴더 자동 정리를 위한 플러그인 입니다

module.exports = {
    mode: none,
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: "build.js",
    },
    // module: {
    //   rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
    // },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: ['babel-loader'],
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'css-loader']
          },
          {
            test: /\.json$/,
            type: "javascript/auto",
            loader: "file-loader",
            options: {
              name: "src/[name].[ext]"
            },
            include: [
              path.resolve(__dirname, "./src")
            ]
          },
          {
            test:/\.ico$/,
            loader:"file-loader?name=[name].[ext]",
          }
        ]
      },
  
    // plugins: [new CleanWebpackPlugin("build.js")],
    plugins: [
        new HtmlWebPackPlugin({
          template: './public/index.html',
          filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        }),
        new CleanWebpackPlugin()
      ]
};