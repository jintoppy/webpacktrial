module.exports = {
    entry: './app/main.js',
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['babel-preset-env']
              }
            }
          }
        ]
    }
};