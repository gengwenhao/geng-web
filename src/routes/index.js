import routeMap from '../../routes.js'
import {render} from '../utils.js'

export default (request) => {
  const {path} = request

  const View = routeMap[path]
  if (!View) {
    console.warn(`${path} is not a valid path.`)
    // throw Error('not a valid route')
    return render(request, '404.html')
  }

  const view = new View()
  switch (request.method) {
    case 'GET':
      return view.get && view.get(request)
    case 'POST':
      return view.post && view.post(request)
    default:
      return view.post && view.post(request)
  }
}
