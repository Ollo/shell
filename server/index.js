const webpack = require('webpack')
const express = require('express')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')

const webpackConfig = require('../build/webpack.config.js')
const config = require('../project.config.js')

const compiler = webpack(webpackConfig)
const server = express()

// Add conditional based on ENV

server.use(
  webpackDevMiddleware(
    compiler, {
      stats: {
        colors: true,
        modules: false,
        chunks: false,
      },
      resolve: {
        modules: [
          'node_modules',
          path.resolve(config.src)
        ]
      }
    }
  )
)

server.use(require('webpack-hot-middleware')(compiler))

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

module.exports = server