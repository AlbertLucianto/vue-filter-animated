export interface SearchParamInterface {
  category: string;
  text: string;
}

export interface ResultsInterface {
  data: Array<Object>;
  status: number;
}
