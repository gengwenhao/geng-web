const {render, json} = require('./src/utils')

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

module.exports = {
  '/': IndexView,
  '/index.html': IndexView,
  '/info': JSONView
}

