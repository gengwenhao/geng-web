const bootstrap = require('./src/core')

bootstrap('localhost', 3000)
  .then(({host, port}) => {
    console.warn(`server is running on http://${host}:${port}`)
  })
