const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'lib');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const ModulesPath = path.resolve(__dirname, 'src');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    //Entry points to the project
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/playground/app/app.js'),
    ],
    //Config options on how to interpret requires imports
    resolve: {
        alias: {
            'myModule': ModulesPath
        },
        extensions: ["", ".js"],
        //node_modules: ["web_modules", "node_modules"]  (Default Settings)
    },
    //Server Configuration options
    devServer:{
        //Relative directory for base of server
        contentBase: 'playground/www',
        devtool: 'eval',
        //Live-reload
        hot: true,
        inline: true,
        //Port Number
        port: 8000,
        //Change to '0.0.0.0' for external facing server
        host: 'localhost',
    },
    devtool: 'eval',
    output: {
        //Path of output file
        path: buildPath,
        filename: 'app.js',
    },
    plugins: [
        //Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        //Allows error warnings but does not stop compiling. Will remove when eslint is added
        new webpack.NoErrorsPlugin(),
        //Moves files
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, "playground")),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ],
    module: {
        loaders: [
            {
                //React-hot loader and
                //All .js files
                test: /\.js$/,
                //react-hot is like browser sync and babel loads jsx and es6-7
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    //eslint config options. Part of the eslint-loader package
    eslint: {
        configFile: '.eslintrc',
    },
};

module.exports = config;
