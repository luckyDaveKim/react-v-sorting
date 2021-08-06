import { ISort } from './ISort';
import { TraceManager } from './trace';
import {
  createLegend,
  createPerformance,
  IDescription,
  IPerformance,
  ITitle,
} from './helper';
import React from 'react';

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

export const insertionSortTitle: ITitle = 'Insertion Sort';

export const insertionSortDescription: IDescription = (
  <div>
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Insertion_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Insertion Sort
      </a>{' '}
      is a simple sorting algorithm that iterates through an array and at each
      iteration it removes one element from the array, finds the location it
      belongs to in the sorted list and inserts it there, repeating until no
      elements remain in the unsorted list. It is an in-place, stable sorting
      algorithm that is inefficient on large input arrays but works well for
      data sets that are almost sorted. It is more efficient in practice
      compared to other quadratic sorting algorithms like bubble sort and
      selection sort.
    </p>
  </div>
);

export const insertionSortPerformance: IPerformance = createPerformance(
  <span>
    O(n<sup>2</sup>)
  </span>,
  <span>
    O(n<sup>2</sup>)
  </span>,
  <span>O(n)</span>,
  <span>O(1)</span>
);

export default insertionSort;
