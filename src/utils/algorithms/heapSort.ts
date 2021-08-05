import { createLegend, createRange, ILegend, swap } from './helper';
import { ISort } from './ISort';
import { TraceManager } from './trace';

const heapSort: ISort = nums => {
  // Init trace manager
  const traceManager = new TraceManager(nums);

  function buildHeap(nums: number[]) {
    const n = nums.length;

    for (let i = n / 2 - 1; i >= 0; i--) {
      heapify(nums, i, n);
    }

    for (let i = n - 1; i > 0; i--) {
      // Heapify node
      traceManager.add(nums, traceManager.getLastSorted(), [], [], [i]);

      // Swap
      traceManager.add(nums, traceManager.getLastSorted(), [], [], [], [0, i]);

      swap(nums, 0, i);

      // Swap
      traceManager.add(nums, traceManager.getLastSorted(), [], [], [], [0, i]);

      heapify(nums, 0, i);
    }
  }

  function heapify(nums: number[], i: number, heapSize: number) {
    // Heapify node
    traceManager.add(nums, traceManager.getLastSorted(), [], [], [i]);

    const leftIndex = i * 2 + 1;
    const rightIndex = i * 2 + 2;

    let largeAtLeast = i;

    if (leftIndex < heapSize) {
      // Compare
      traceManager.add(nums, traceManager.getLastSorted(), [
        largeAtLeast,
        leftIndex,
      ]);

      if (nums[leftIndex] > nums[largeAtLeast]) largeAtLeast = leftIndex;
    }

    if (rightIndex < heapSize) {
      // Compare
      traceManager.add(nums, traceManager.getLastSorted(), [
        largeAtLeast,
        rightIndex,
      ]);

      if (nums[rightIndex] > nums[largeAtLeast]) largeAtLeast = rightIndex;
    }

    if (largeAtLeast !== i) {
      // Swap
      traceManager.add(
        nums,
        traceManager.getLastSorted(),
        [],
        [],
        [],
        [i, largeAtLeast]
      );

      swap(nums, i, largeAtLeast);

      // Swap
      traceManager.add(
        nums,
        traceManager.getLastSorted(),
        [],
        [],
        [],
        [i, largeAtLeast]
      );

      heapify(nums, largeAtLeast, heapSize);
    }
  }

  buildHeap(nums);

  // All sorted trace
  traceManager.add(nums, createRange(0, nums.length - 1));

  return traceManager.getTrace();
};
export const heapSortLegend: ILegend = createLegend(
  'Comparing',
  null,
  'Target heapify',
  'Swapping'
);

export default heapSort;
