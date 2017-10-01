import Vue from 'vue';
import * as types from './mutation-types';
import { StateInterface } from './data-types';
import { SearchParamInterface } from '../api/data-types';

export default {
  [types.CHANGE_SEARCH_CATEGORY] (state: StateInterface, category: string) {
    state.currentSearchCategory = category;
  },

  [types.GET_SEARCH_RESULT] (state: StateInterface) {
    state.loading = true;
  },

  [types.RECEIVE_SEARCH_RESULT] (state: StateInterface, results) {
    Vue.set(state, 'nodes', results);
  }
}