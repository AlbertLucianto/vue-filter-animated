import { Observable } from 'rxjs';
import * as api from '../api';
import * as types from './mutation-types';
import { SearchParamInterface, ResultsInterface } from '../api/data-types';

export const changeSearchCategory = ({ commit }, category: string) => {
  commit(types.CHANGE_SEARCH_CATEGORY, category);
};

export const getSearchResult = ({ commit }, param: SearchParamInterface) => {
  commit(types.GET_SEARCH_RESULT);
  api.getSearchResult(param)
  .then((results: ResultsInterface) => {
    const shownResult = [];
    commit(types.RECEIVE_SEARCH_RESULT, shownResult);
    const source = Observable.interval(200).take(results.data.length);
    source.subscribe(idx => {
      shownResult.push(results.data[idx]);
      commit(types.RECEIVE_SEARCH_RESULT, shownResult);
    });
  });
};