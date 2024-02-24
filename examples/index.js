import bootstrap from 'geng-web/src/core.js'
import {success} from 'geng-web/src/utils/debug.js'
import routes from './routes.js'

bootstrap('localhost', 3000, routes)
  .then(({host, port}) => {
    success(`server is running on http://${host}:${port}`)
  })
