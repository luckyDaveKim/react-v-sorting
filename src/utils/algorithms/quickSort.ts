import { createRange, swap } from './helper';
import { ISort } from './ISort';
import { TraceManager } from './trace';

const quickSort: ISort = nums => {
  // Init trace manager
  const traceManager = new TraceManager(nums);

  function partition(nums: number[], start: number, end: number): number {
    // Divide
    const divideRange = createRange(start, end);
    traceManager.add(nums, traceManager.getLastSorted(), divideRange);

    let pivot = Math.floor((start + end) / 2);

    // Select pivot
    traceManager.add(nums, traceManager.getLastSorted(), divideRange, [
      pivot,
    ]);

    // Swap pivot
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      divideRange,
      [],
      [],
      [start, pivot]
    );

    swap(nums, start, pivot);

    // Swap pivot
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      divideRange,
      [],
      [],
      [start, pivot]
    );

    pivot = start;

    // Select pivot
    traceManager.add(nums, traceManager.getLastSorted(), divideRange, [
      pivot,
    ]);

    let left = start + 1;
    let right = end;

    do {
      while (true) {
        // Compare
        traceManager.add(
          nums,
          traceManager.getLastSorted(),
          divideRange,
          [pivot],
          [left]
        );

        if (nums[left] < nums[pivot]) {
          left++;
        } else {
          break;
        }
      }

      while (true) {
        // Compare
        traceManager.add(
          nums,
          traceManager.getLastSorted(),
          divideRange,
          [pivot],
          [right]
        );

        if (nums[pivot] < nums[right]) {
          right--;
        } else {
          break;
        }
      }

      if (left <= right) {
        // Swap
        traceManager.add(
          nums,
          traceManager.getLastSorted(),
          divideRange,
          [pivot],
          [],
          [left, right]
        );

        swap(nums, left, right);

        // Swap
        traceManager.add(
          nums,
          traceManager.getLastSorted(),
          divideRange,
          [pivot],
          [],
          [left, right]
        );

        left++;
        right--;
      }
    } while (left <= right);

    // Swap pivot
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      divideRange,
      [],
      [],
      [pivot, left - 1]
    );

    swap(nums, pivot, left - 1);

    // Swap pivot
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      divideRange,
      [],
      [],
      [pivot, left - 1]
    );

    pivot = left - 1;

    // Select pivot
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      divideRange,
      [pivot]
    );

    return pivot;
  }

  function recursiveQuickSort(nums: number[], start: number, end: number) {
    if (start >= end) {
      if (start === end) {
        // Partial sorted trace
        traceManager.add(nums, [...traceManager.getLastSorted(), start]);
      }

      return;
    }

    const pivot = partition(nums, start, end);

    // Partial sorted trace
    traceManager.add(nums, [...traceManager.getLastSorted(), pivot]);

    recursiveQuickSort(nums, start, pivot - 1);
    recursiveQuickSort(nums, pivot + 1, end);
  }

  recursiveQuickSort(nums, 0, nums.length - 1);

  // All sorted trace
  traceManager.add(nums, [...Array(nums.length).keys()]);

  return traceManager.getTrace();
};

export default quickSort;
