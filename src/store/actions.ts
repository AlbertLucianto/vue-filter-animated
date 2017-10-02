import { Observable } from 'rxjs';
import * as api from '../api';
import * as types from './mutation-types';
import { SearchParamInterface, ResultsInterface } from '../api/data-types';

export const changeSearchCategory = ({ commit }, category: string) => {
  commit(types.CHANGE_SEARCH_CATEGORY, category);
};

export const getSearchResult = ({ commit, state }, param: SearchParamInterface) => {
  commit(types.GET_SEARCH_RESULT);
  api.getSearchResult(param)
  .then((results: ResultsInterface) => {
    const newResult = [];
    const existingResult = results.data.filter(val => {
      if(state.nodes.map(node => node.title.toLowerCase()).includes(val.title.toLowerCase())) return true;
      else {
        newResult.push(val);
        return false;
      }
    });
    commit(types.RECEIVE_SEARCH_RESULT, existingResult);
    const source = Observable.interval(200).take(newResult.length);
    source.subscribe(idx => {
      existingResult.push(newResult[idx]);
      commit(types.RECEIVE_SEARCH_RESULT, existingResult);
    });
  });
};