import http from './http/index.js'
import router from './router/index.js'
import utils from './utils/index.js'
import bootstrap from './core.js'
import * as settings from './settings.js'

export default {
  http,
  router,
  utils,
  bootstrap,
  baseSettings: settings
}
