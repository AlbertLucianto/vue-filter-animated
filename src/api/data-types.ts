export interface SearchParamInterface {
  category: string;
  text: string;
}

export interface NodeInterface {
  title: string;
  category: string;
}

export interface ResultsInterface {
  data: Array<NodeInterface>;
  status: number;
}
