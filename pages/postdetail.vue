<template>
  <section class="container">
    <page-nav />
    <div class="rich-text detail-content" v-html="post.post_body"></div>
  </section>
</template>

<script>
import API from '~/utils/api'
import PageNav from '~/components/PageNav.vue'

export default {
  components: {
    PageNav
  },
  async asyncData(context) {
    let id = context.query.id
    return API.postdetail({ params: { id } }).then(res => {
      if (res.status === 200) {
        let { data } = res
        return { post: data }
      } else {
        console.log('get postdetail error', res)
      }
    })
  },
  data() {
    return {
      post: null
    }
  },
  mounted() {
   
  },
  methods: {
    loadData(id) {}
  },
  loadDataError() {}
}
</script>

<style lang="scss">
@import '~scss/index.scss';
@import '~scss/heighlight.scss';
</style>


<style lang='scss' scoped>
.detail-content {
  padding: 40px;
}
</style>
