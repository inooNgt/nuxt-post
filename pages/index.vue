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
import { servive } from '~/utils/http'
import PostItem from '~/components/PostItem.vue'
import PageNav from '~/components/PageNav.vue'
export default {
  components: {
    PageNav,
    PostItem
  },
  async asyncData(context) {
    return servive
      .get('/api/posts', { params: { page: 1, perPage: 999 } })
      .then(res => {
        console.log('loaded posts successed in asyncData')
        if (res.status === 200 || res.status === 304) {
          let { data } = res
          return { data: data.data }
        }
      })
      .catch(e => {
        console.log('loaded posts error in asyncData')
      })
  },
  data() {
    return { data: null }
  },
  created() {
    API.posts({ params: { page: 1, perPage: 999 } })
      .then(res => {
        console.log('loaded posts successed in created')
        if (res.status === 200 || res.status === 304) {
          let { data } = res
          this.data = data.data
          return { data: data.data }
        }
      })
      .catch(e => {
        console.log('loaded posts error in created')
      })
  },
  mounted() {
    //  this.$axios
    //   .post(`/api/posts`)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
  },
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
