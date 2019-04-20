<template>
  <li class="posts-item">
    <h4 class="posts-item-title">
      <NuxtLink :to="'/postdetail?id='+item.id">{{item.post_title}}</NuxtLink>
    </h4>
    <div class="posts-item-info">
      <span>{{item.author}}</span>
      <span>{{item.created_at}}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: { item: Object },
  mounted() {
    console.log('item mounted')
  }
}
</script>

<style lang="scss" scoped>
@import '~scss/base/fun';
.posts-item {
  list-style: none;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid $color-border;
  &:last-child {
    border: none;
  }
}

.posts-item-title {
  font-size: 22px;
  font-weight: normal;
  margin: 0 0 10px 0;
  a:hover {
    color: $color-main;
  }
}

.posts-item-info {
  font-size: 14px;
  color: $color-gray;
  & > span {
    margin-right: 20px;
  }
}
</style>
