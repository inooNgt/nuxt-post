<template>
  <section class="container">
    <PageNav />
    <ul class="post-list">
      <post-item v-for="item in data" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script>
import API from '~/utils/api'
import PostItem from '~/components/PostItem.vue'
import PageNav from '~/components/PageNav.vue'
export default {
  components: {
    PageNav,
    PostItem
  },
  async asyncData(context) {
    return API.posts({ params: { page: 1, perPage: 999 } })
      .then(res => {
        if (res.status === 200) {
          let { data } = res
          return { data: data.data }
        }
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return { data: null }
  },
  mounted() {},
  methods: {
    async loadData(page = 1) {}
  },
  loadDataError() {}
}
</script>

<style lang="scss">
@import '~scss/index.scss';
</style>


<style lang='scss' scoped>
.post-list {
  min-height: 600px;
  padding: 20px;
}
</style>
