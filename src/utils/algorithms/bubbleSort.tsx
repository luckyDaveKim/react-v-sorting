import {
  createLegend,
  createPerformance,
  ICode,
  IDescription,
  ILegend,
  IPerformance,
  ITitle,
  swap,
} from './helper';
import { ISort } from './ISort';
import { TraceManager } from './trace';
import React from 'react';

const bubbleSort: ISort = nums => {
  // Init trace manager
  const traceManager = new TraceManager(nums);

  const dataSize = nums.length;
  for (let i = 1; i < dataSize; i++) {
    for (let j = 0; j < dataSize - i; j++) {
      // Comparing
      traceManager.add(nums, traceManager.getLastSorted(), [j, j + 1]);

      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);

        // Swap
        traceManager.add(
          nums,
          traceManager.getLastSorted(),
          [],
          [],
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

export const bubbleSortLegend: ILegend = createLegend(
  'Comparing',
  null,
  null,
  'Swapping'
);

export const bubbleSortTitle: ITitle = 'Bubble Sort';

export const bubbleSortDescription: IDescription = (
  <div>
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bubble_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bubble Sort
      </a>{' '}
      is a simple sorting algorithm that repeatedly steps through the list,
      compares adjacent elements and swaps them if they are in the wrong
      order.The pass through the list is repeated until the list is sorted. The
      algorithm, which is a comparison sort, is named for the way smaller or
      larger elements "bubble" to the top of the list. Although the algorithm is
      simple, it is too slow and impractical for most problems
    </p>
  </div>
);

export const bubbleSortPerformance: IPerformance = createPerformance(
  <span>
    O(n<sup>2</sup>)
  </span>,
  <span>
    O(n<sup>2</sup>)
  </span>,
  <span>O(n)</span>,
  <span>O(1)</span>
);

export const bubbleSortCode: ICode = ``;

export default bubbleSort;
