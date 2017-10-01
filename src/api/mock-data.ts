import { ResultsInterface } from './data-types';

const data = [
  {
    title: 'Love',
    category: 'topic',
  },
  {
    title: 'Music',
    category: 'topic',
  },
  {
    title: 'Tech',
    category: 'topic',
  },
  {
    title: 'Health',
    category: 'topic',
  },
  {
    title: 'Lifestyle',
    category: 'topic',
  },
  {
    title: 'Movies',
    category: 'topic',
  },
];

export const filteredData = function (category: string, text: string): ResultsInterface {
  return { data: data.filter(val => val.title.toLowerCase().includes(text.toLowerCase())), status: 200 };
};