import { ILegend, IPerformance } from './helper';
import { ISort } from './ISort';

export interface ISortChart {
  sort: ISort;

  getLegend(): ILegend;

  getTitle(): string;

  getDescription(): JSX.Element;

  getPerformance(): IPerformance;

  getCode(): string;
}
