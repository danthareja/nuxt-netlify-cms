export default {
  name: 'About',
  async asyncData({ app }) {
    return app.$content('pages').get('contact');
  }
}