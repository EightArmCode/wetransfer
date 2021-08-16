import { join, resolve } from 'path'
import { config } from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
config()
const isDev = process.env.NODE_ENV === 'development'

export default {
    entry: resolve(__dirname, 'src/index.tsx'),
    mode: process.env.NODE_ENV,
    ...(isDev && { devtool: 'inline-source-map' }),
    ...(isDev && { devServer: {
        hot: true,
        compress: true,
        port: 1917,
        // https: true,
        contentBase: join(__dirname, 'dist'),
    }}),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env'],
                            root: resolve(__dirname),
                        }
                    },
                    { loader: 'ts-loader' },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
        
    },
    node: {
        __dirname: true,
    },
    output: {
        filename: '[name].bundle.js',
        path: join(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WeTransfer Spinner',
            template: join(__dirname, 'src/index.html'),
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
