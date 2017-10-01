<template>
  <input v-model="text" placeholder="Search">
</template>

<script>
export default {
  name: 'search-bar',
  props: ['searchText'],
  computed: {
    text() {
      return this.searchText;
    },
  },
};
</script>

<style scoped lang="scss">

</style>