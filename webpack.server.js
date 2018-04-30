const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const config = {

    // Inform webpack that we are building 
    // a bundle for nodejs and hot for browser.
    target: 'node',

    // Tell webpack the root file of our 
    // server application
    entry: './src/index.js',

    // Tell webpack wehere to put the
    // output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell webpack to not include node_modules
    // in the bundle file
    // webpack-node-externals library creates an 
    // externals function that ignores node_modules
    externals: [webpackNodeExternals()],

    // Common server/client part:

    // Tells webpack to run bable in every file it
    // runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_module/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }

            }
        ]
    }
};

module.exports = config;