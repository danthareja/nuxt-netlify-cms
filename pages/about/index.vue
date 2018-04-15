<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ body.title }}
      </h1>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'About',
    async asyncData({ app }) {
      return app.$content('pages').get('about');
    }
  }
</script>