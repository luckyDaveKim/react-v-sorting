import { swap } from './helper';
import { ISort } from './ISort';
import { TraceManager } from './trace';

const bubbleSort: ISort = nums => {
  // Init trace manager
  const traceManager = new TraceManager(nums);

  const dataSize = nums.length;
  for (let i = 1; i < dataSize; i++) {
    for (let j = 0; j < dataSize - i; j++) {
      // Comparing
      traceManager.add(nums, [...traceManager.getLastSorted()], [j, j + 1]);

      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);

        // Swap
        traceManager.add(
          nums,
          [...traceManager.getLastSorted()],
          [],
          [j, j + 1]
        );
      }
    }

    // Partial sorted trace
    traceManager.add(nums, [...traceManager.getLastSorted(), dataSize - i]);
  }

  // Last sorted trace
  traceManager.add(nums, [...traceManager.getLastSorted(), 0]);

  return traceManager.getTrace();
};

export default bubbleSort;
