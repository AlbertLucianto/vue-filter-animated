import Vue from 'vue';
import Vuex, { GetterTree, ActionTree } from 'vuex';
import { StateInterface } from './data-types';
import mutations from './mutations';
const actions: ActionTree<Object, Object> = require('./actions');
const getters: GetterTree<StateInterface, Object> = require('./getters');

Vue.use(Vuex);

const state: StateInterface = {
  loading: false,
  currentSearchCategory: null,
  nodes: [],
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});