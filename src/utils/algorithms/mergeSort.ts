import { ISort } from './ISort';
import { TraceManager } from './trace';

const mergeSort: ISort = nums => {
  // Init trace manager
  const traceManager = new TraceManager(nums);

  function recursiveMergeSort(nums: number[], start: number, end: number) {
    const mid = Math.floor((start + end) / 2);

    // Divide
    const divideRange = Array.from(
      { length: end - start + 1 },
      (_, i) => i + start
    );
    traceManager.add(nums, [], divideRange);

    if (start === end) return;

    recursiveMergeSort(nums, start, mid);
    recursiveMergeSort(nums, mid + 1, end);
    combine(nums, start, end);
  }

  function combine(nums: number[], start: number, end: number) {
    const mid = Math.floor((start + end) / 2);
    let leftPart = nums.slice(start, mid + 1);
    let rightPart = nums.slice(mid + 1, end + 1);
    let left = 0;
    let right = 0;
    let i = start;

    while (left < leftPart.length && right < rightPart.length) {
      nums[i] =
        leftPart[left] <= rightPart[right]
          ? leftPart[left++]
          : rightPart[right++];

      // Combine
      traceManager.add(nums, [], [], [i]);

      i++;
    }

    while (left < leftPart.length) {
      nums[i] = leftPart[left++];

      // Combine
      traceManager.add(nums, [], [], [i]);

      i++;
    }

    while (right < rightPart.length) {
      nums[i] = rightPart[right++];

      // Combine
      traceManager.add(nums, [], [], [i]);

      i++;
    }
  }

  recursiveMergeSort(nums, 0, nums.length - 1);

  // All sorted trace
  traceManager.add(nums, [...Array(nums.length).keys()]);

  return traceManager.getTrace();
};

export default mergeSort;
