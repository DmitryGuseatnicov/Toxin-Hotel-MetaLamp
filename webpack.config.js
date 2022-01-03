const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs')

let mode = 'development'
if (process.env.NODE_ENV == 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

const PAGES_DIR = path.resolve(__dirname, 'src/pages');
const PAGES = fs.readdirSync(path.resolve(__dirname, 'src/pages'))
const entryPoints = Object.assign({}, ...PAGES.map(page => 
    ({[page]: `${PAGES_DIR}/${page}/${page}.js`, })));


module.exports = {
    mode: mode,
    context: path.resolve(__dirname, 'src'),
    entry: entryPoints,
    output: {
        filename: '[name]/[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        open: './ui-kit.html',
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[name].[contenthash].css'
        }),
        ...PAGES.map((page)=> new HtmlWebpackPlugin({
            filename: `${page}/${page}.html`,
            template: `${PAGES_DIR}/${page}/${page}.pug`,
            chunks:[page]
        }))
    
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [   
                                        "autoprefixer",
                                        { 'overrideBrowserslist': ['> 1%', 'last 2 versions']},
                                        "postcss-preset-env",
                                    ],
                                ],
                            },
                        },
                    },
                    "resolve-url-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/images/[name].[hash][ext]',
                },
            },
            {
                test: /\.ico/i,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/images/favicon/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/fonts/[name][ext]',
                },
        
            },
            {
                test: /\.pug$/,
                use: [
                  {
                    loader: "html-loader"
                  },
                  {
                    loader: "pug-html-loader",
                    options: {
                      "pretty":true
                    }
                  }
                ],
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
  }