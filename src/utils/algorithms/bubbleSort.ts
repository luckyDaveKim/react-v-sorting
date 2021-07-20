import { ISortChartData } from '../../components/molecules/SortChart/SortChart';
import { swap } from './helper';
import { ISort } from './ISort';

const bubbleSort: ISort = nums => {
  const trace: ISortChartData[] = [];

  // add init trace
  trace.push({
    nums: [...nums],
    comparingIndices: [],
    comparedIndices: [],
    sortedIndices: [],
  });

  const dataSize = nums.length;
  for (let i = 1; i < dataSize; i++) {
    for (let pivot = 0; pivot < dataSize - i; pivot++) {
      // add comparing trace
      trace.push({
        nums: [...nums],
        comparingIndices: [pivot, pivot + 1],
        comparedIndices: [],
        sortedIndices: [...trace[trace.length - 1].sortedIndices], // add last sortedIndices
      });

      if (nums[pivot] > nums[pivot + 1]) {
        swap(nums, pivot, pivot + 1);

        // add compared trace
        trace.push({
          nums: [...nums],
          comparingIndices: [pivot, pivot + 1],
          comparedIndices: [pivot, pivot + 1],
          sortedIndices: [...trace[trace.length - 1].sortedIndices], // add last sortedIndices
        });
      }
    }

    // add partial sorted trace
    trace.push({
      nums: [...nums],
      comparingIndices: [],
      comparedIndices: [],
      sortedIndices: [...trace[trace.length - 1].sortedIndices, dataSize - i], // add last sortedIndices with current index
    });
  }

  // add finish sorted trace
  trace.push({
    nums: [...nums],
    comparingIndices: [],
    comparedIndices: [],
    sortedIndices: [...trace[trace.length - 1].sortedIndices, 0], // add all indices
  });

  return trace;
};

export default bubbleSort;
