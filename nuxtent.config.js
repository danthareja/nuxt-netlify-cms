module.exports = {
  content: [
    ['pages', {
      page: '/content/pages/_slug',
      permalink: ':slug',
      isPost: false,
      generate: [
        'get'
      ]
    }]
  ]
}