import { Getter } from 'vuex';
import { StateInterface } from './data-types';

export const nodes: Getter<StateInterface, Object> = (state: StateInterface) => state.nodes;
export const category: Getter<StateInterface, Object> = (state: StateInterface) => state.currentSearchCategory;
export const loading: Getter<StateInterface, Object> = (state: StateInterface) => state.loading;