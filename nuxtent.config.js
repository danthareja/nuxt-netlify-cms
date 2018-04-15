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
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: process.env.NODE_ENV === 'production'
      ? 'https://nuxt-netlify-cms.netlify.com'
      : ''
  }
}