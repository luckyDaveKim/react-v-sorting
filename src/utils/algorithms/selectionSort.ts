import { ISortChartData } from '../../components/molecules/SortChart/SortChart';
import { swap } from './helper';
import { ISort } from './ISort';

const selectionSort: ISort = nums => {
  const trace: ISortChartData[] = [];

  // add init trace
  trace.push({
    nums: [...nums],
    comparingIndices: [],
    comparedIndices: [],
    sortedIndices: [],
  });

  const dataSize = nums.length;
  for (let i = 0; i < dataSize - 1; i++) {
    for (let pivot = i + 1; pivot < dataSize; pivot++) {
      // add comparing trace
      trace.push({
        nums: [...nums],
        comparingIndices: [i, pivot],
        comparedIndices: [],
        sortedIndices: [...trace[trace.length - 1].sortedIndices], // add last sortedIndices
      });

      if (nums[pivot] < nums[i]) {
        swap(nums, i, pivot);

        // add compared trace
        trace.push({
          nums: [...nums],
          comparingIndices: [i, pivot],
          comparedIndices: [i, pivot],
          sortedIndices: [...trace[trace.length - 1].sortedIndices], // add last sortedIndices
        });
      }
    }

    // add partial sorted trace
    trace.push({
      nums: [...nums],
      comparingIndices: [],
      comparedIndices: [],
      sortedIndices: [...trace[trace.length - 1].sortedIndices, i], // add last sortedIndices with current index
    });
  }

  // add finish sorted trace
  trace.push({
    nums: [...nums],
    comparingIndices: [],
    comparedIndices: [],
    sortedIndices: [...trace[trace.length - 1].sortedIndices, dataSize - 1], // add all indices
  });

  return trace;
};

export default selectionSort;
