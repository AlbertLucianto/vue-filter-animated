import { SearchParamInterface, ResultsInterface } from './data-types';
import { filteredData } from './mock-data';
const LATENCY = 50;

export function getSearchResult(param: SearchParamInterface): Promise<ResultsInterface> {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), LATENCY);
  }).then(() => filteredData(param.category, param.text));
};