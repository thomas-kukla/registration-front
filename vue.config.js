module.exports = {
    devServer: {
        watchOptions : {
            aggregateTimeout: 500,
            poll: 1000,
            ignored: ['node_modules'],
        },
        host : 'localhost',
    }
  }