import {json, render} from './src/http/response.js'

class IndexView {
  get(request) {
    const name = request.queryDict.name || '耿文浩'
    return render(request, 'index.html', {name})
  }

  post(request) {

  }
}

class JSONView {
  get(request) {
    const profile = Object.assign({
      name: 'gengwenhao',
      age: 27,
      gender: 'male'
    }, request.queryDict)

    return json(profile)
  }
}

export default {
  '/': IndexView,
  '/index.html': IndexView,
  '/info': JSONView
}


