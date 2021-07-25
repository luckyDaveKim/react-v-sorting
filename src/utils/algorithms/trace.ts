import { ISortChartData } from '../../components/molecules/SortChart/SortChart';

export class TraceManager {
  private readonly trace: ISortChartData[];

  constructor(nums: number[]) {
    this.trace = [];

    this.add(nums);
  }

  public add(
    nums: number[],
    sortedIndices: number[] = [],
    groupA: number[] = [],
    groupB: number[] = [],
    groupC: number[] = [],
    groupD: number[] = []
  ) {
    this.trace.push({
      nums: [...nums],
      groupA: [...groupA],
      groupB: [...groupB],
      groupC: [...groupC],
      groupD: [...groupD],
      sortedIndices: [...sortedIndices],
    });
  }

  public getLastSorted() {
    return this.trace[this.trace.length - 1].sortedIndices;
  }

  public getTrace() {
    return this.trace;
  }
}
