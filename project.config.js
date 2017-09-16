const path = require('path')

module.exports = {
  env : process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3333,
  src: path.resolve('./src'),
  dist: path.resolve('./dist'),
}