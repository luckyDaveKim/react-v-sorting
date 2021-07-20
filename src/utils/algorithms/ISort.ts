import { ISortChartData } from '../../components/molecules/SortChart/SortChart';

export interface ISort {
  (nums: number[]): ISortChartData[];
}
