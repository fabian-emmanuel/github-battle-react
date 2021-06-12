import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const mode = "development"
export const entry = "./app/index.js"
export const output = {
  path: resolve(__dirname, "dist"),
  filename: "index_bundle.js",
}
export const module = {
  rules: [
    { test: /\.(js)$/, use: "babel-loader" },
    { test: /\.css$/, use: ["style-loader", "css-loader"] },
  ],
}
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'app/index.html'
  })
]

