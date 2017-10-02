<template>
  <div class="navbar">
    <input @keyup="debounceSearch" v-model="searchText">
    <transition-group
      enter-active-class="animated bounceIn"
      leave-active-class="animated bounceOut"
    >
      <div v-for="(item, index) in nodes" :key="item.title" class="node">
        {{ item.title }}<br>
        {{ item.category }}
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import debounce from 'lodash/debounce';
import SearchBar from './SearchBar';

/* eslint func-names: ["error", "never"] */
export default {
  name: 'navbar',
  data() {
    return {
      searchText: '',
    };
  },
  computed: {
    ...mapGetters({
      nodes: 'nodes',
      category: 'category',
    }),
  },
  methods: {
    getSearchResult() {
      const { category, searchText } = this;
      if (searchText.trim()) {
        this.$store.dispatch('getSearchResult', {
          category,
          text: searchText,
        });
      }
    },
    debounceSearch: debounce(function () {
      this.getSearchResult();
    }, 400),
  },
  components: {
    'search-bar': SearchBar,
  },
};
</script>

<style lang="scss" scoped>
  @import 'static/colors.scss';
  .navbar {
    position: fixed;
    width: 100vw;
    height: 50px;
    top: 0;
    left: 0;
    background-color: $primaryOrange;
  }
  .node {
    padding: 20px;
    margin: 10px auto;
    width: 300px;
    border-radius: 10px;
    background: $white;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  }
</style>