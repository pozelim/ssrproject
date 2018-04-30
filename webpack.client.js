const path = require('path');

const config = {

    // Tell webpack that client.js is the entry point
    entry: './src/client/client.js',

    // Output bundle to public directory.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

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