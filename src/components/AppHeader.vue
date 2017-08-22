<template>
  <section class="hero is-info is-small">
    <div class="hero-body has-text-centered">
      <h1 class="title">Demo Blog</h1>
      <h2 class="subtitle">Kongkow IT Meetup #2</h2>
    </div>

    <div class="hero-foot">
      <div class="tabs is-centered is-medium is-boxed">
        <ul>
          <router-link tag="li" :to="{ name: 'ArticleList' }"> <a> Article List </a> </router-link>
          <router-link tag="li" :to="{ name: 'ArticleForm' }"> <a> New Article </a> </router-link>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

