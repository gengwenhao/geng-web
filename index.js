import bootstrap from './src/core.js'
import {success} from './src/utils/debug.js'

bootstrap('localhost', 3000)
  .then(({host, port}) => {
    success(`server is running on http://${host}:${port}`)
  })
