import routeMap from '../../routes.js'
import {render} from '../http/response.js'
import {warn} from '../utils/debug.js'

export default (request) => {
  const {path} = request

  const View = routeMap[path]
  if (!View) {
    warn(`${path} is not a valid path.`)

    return render(request, '404.html')
  }

  const view = new View()
  warn(request.line)
  switch (request.method) {
    case 'GET':
      return view.get && view.get(request)
    case 'POST':
      return view.post && view.post(request)
    default:
      return view.post && view.post(request)
  }
}
