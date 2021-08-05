import { ISort } from './ISort';
import { TraceManager } from './trace';
import { createLegend } from './helper';

const insertionSort: ISort = nums => {
  // Init trace manager
  const traceManager = new TraceManager(nums);

  const dataSize = nums.length;
  for (let i = 1; i < dataSize; i++) {
    const targetValue = nums[i];
    let holeIndex = i;

    // Save target value
    traceManager.add(nums, [], [], [i]);

    while (holeIndex > 0) {
      // Comparing
      traceManager.add(nums, [], [holeIndex - 1]);

      if (nums[holeIndex - 1] <= targetValue) break;

      // Move
      traceManager.add(nums, [], [], [], [], [holeIndex - 1, holeIndex]);

      nums[holeIndex] = nums[holeIndex - 1];

      // Move
      traceManager.add(nums, [], [], [], [], [holeIndex - 1, holeIndex]);

      holeIndex--;
    }

    nums[holeIndex] = targetValue;

    // Load
    traceManager.add(nums, [], [], [], [holeIndex]);
  }

  // Sorted
  traceManager.add(nums, [...Array(nums.length).keys()]);

  return traceManager.getTrace();
};

export const insertionSortLegend = createLegend(
  'Comparing',
  'Saving',
  'Loading',
  'Moving'
);

export default insertionSort;
