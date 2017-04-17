const DotenvPlugin = require('webpack-dotenv-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [`${__dirname}/src/index.jsx`],
  output:{
    path: `${__dirname}/dist`,
    filename: "./bundle.js"
  },
  module:{
    loaders:[{
      test: /\.jsx?$/,
      loader:'babel',
      query:{
        presets:["es2015", "react"]
      }
    }]
  },
  resolve:{
    extensions:['','.js', '.jsx']
  },
  plugins:[
    new DotenvPlugin({
      path: './.env'
    })
  ]
}
