<template>
  <nav class="page-nav">
    <div class="nav-inner">
      <router-link to="/" class="nav-logo">
        <img class="nav-logo-image" src="~/assets/img/logo.png">
        <span>inooNgt</span>
      </router-link>
      <div class="nav-bar"></div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {},
  mounted() {}
};
</script>

<style lang='scss' scoped>
@import '~scss/base/fun';

.page-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid $color-border;
}

.nav-inner {
  width: $innerWidth;
  height: $navHeight;
  margin: 0 auto;
  display: flex;
  height: $navHeight;
  line-height: $navHeight;
  .nav-logo {
    display: flex;
    align-items: center;
    font-family: Helvetica;
    font-size: 24px;
  }
  .nav-logo-image {
    width: 32px;
    height: 32px;
  }
}
</style>
