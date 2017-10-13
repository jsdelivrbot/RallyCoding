const path = require('path');

const config ={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'bundel.js'
    }
};

module.exports = config;
