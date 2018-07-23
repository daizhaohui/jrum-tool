const Path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dirname = process.cwd();
const CopyWebpackPlugin = require("copy-webpack-plugin");
const _ = require("lodash");
const fs = require("fs");

var nodeEnv = 'development';
var args = process.argv;
var index = _.findIndex(args,item=>item.toLowerCase()==="--mode");
if(index>0 && index+1<args.length){
    nodeEnv = args[index+1];
}
var isProd = nodeEnv === 'production';
var dir = Path.resolve(dirname,"app/assets/js");

var fileNames= [Path.resolve(dir,"bundle.js"),Path.resolve(dir,"bundle.js.map"),Path.resolve(dir,"vendor.js"),Path.resolve(dir,"vendor.js.map")]
fileNames.forEach(file=>{
    if(fs.existsSync(file)){
        fs.unlinkSync(file);
    };
});

module.exports = [{
    target: 'electron-renderer',
    devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map',
    entry: {
        "assets/js/bundle": Path.resolve(dirname, 'lib/index.js'),
        "assets/js/vendor": ['react', 'react-dom', 'react-router', 'prop-types','lodash'],
    },
    output: {
        path: Path.resolve(dirname, "app"),
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /^node_modules$/,
                include: Path.resolve(dirname, "lib"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'stage-0', 'react'],
                        plugins: [
                            [
                                "import",
                                {
                                    libraryName: "antd",
                                    style: true
                                }
                            ],
                            ["transform-runtime", {
                                "helpers": false,
                                "polyfill": false,
                                "regenerator": true,
                                "moduleName": "babel-runtime"
                            }]
                        ],
                        compact: isProd ? true : false
                    }
                }

            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            minimize: isProd ? true : false
                        }
                    }
                ]

            },
            {
                test: /\.less$/,
                exclude: /^node_modules$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            minimize: isProd ? true : false
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                exclude: /^node_modules$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'assets/images/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /^node_modules$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
                    }

                }]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendorOne: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "assets/js/vendor",
                    chunks: "all",
                    enforce: true,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        }),
        new CopyWebpackPlugin([
            // {
            //     from: Path.resolve(dirname, "src/assets/css/"),
            //     to: Path.resolve(dirname, "dist/assets/css"),
            // },
        ])
    ]
}]