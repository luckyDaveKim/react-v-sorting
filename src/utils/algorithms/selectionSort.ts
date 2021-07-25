import { swap } from './helper';
import { ISort } from './ISort';
import { TraceManager } from './trace';

const selectionSort: ISort = nums => {
  // Init trace manager
  const traceManager = new TraceManager(nums);

  const dataSize = nums.length;
  for (let i = 0; i < dataSize - 1; i++) {
    let minIndex = i;

    // Set current min
    traceManager.add(nums, [...traceManager.getLastSorted()], [minIndex]);

    for (let j = i + 1; j < dataSize; j++) {
      // Comparing
      traceManager.add(
        nums,
        [...traceManager.getLastSorted()],
        [],
        [minIndex, j]
      );

      if (nums[j] < nums[minIndex]) {
        minIndex = j;

        // Set current min
        traceManager.add(nums, [...traceManager.getLastSorted()], [minIndex]);
      }
    }

    swap(nums, i, minIndex);

    // Partial sorted trace
    traceManager.add(nums, [...traceManager.getLastSorted(), i]);
  }

  // Last sorted trace
  traceManager.add(nums, [...traceManager.getLastSorted(), dataSize - 1]);

  return traceManager.getTrace();
};

export default selectionSort;
