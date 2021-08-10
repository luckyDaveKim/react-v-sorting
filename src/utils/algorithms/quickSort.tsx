import {
  createLegend,
  createPerformance,
  createRange,
  ICode,
  IDescription,
  IPerformance,
  ITitle,
  swap,
} from './helper';
import { ISort } from './ISort';
import { TraceManager } from './trace';
import React from 'react';

const quickSort: ISort = nums => {
  // Init trace manager
  const traceManager = new TraceManager(nums);

  function partition(nums: number[], start: number, end: number): number {
    // Divide
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      [],
      [],
      createRange(start, end)
    );

    let pivot = Math.floor((start + end) / 2);

    // Select pivot
    traceManager.add(nums, traceManager.getLastSorted(), [], [pivot]);

    // Swap pivot
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      [],
      [],
      [],
      [start, pivot]
    );

    swap(nums, start, pivot);

    // Swap pivot
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      [],
      [],
      [],
      [start, pivot]
    );

    pivot = start;

    // Select pivot
    traceManager.add(nums, traceManager.getLastSorted(), [], [pivot]);

    let left = start + 1;
    let right = end;

    do {
      while (true) {
        // Compare
        traceManager.add(nums, traceManager.getLastSorted(), [left], [pivot]);

        if (nums[left] < nums[pivot]) {
          left++;
        } else {
          break;
        }
      }

      while (true) {
        // Compare
        traceManager.add(nums, traceManager.getLastSorted(), [right], [pivot]);

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
          [],
          [pivot],
          [],
          [left, right]
        );

        swap(nums, left, right);

        // Swap
        traceManager.add(
          nums,
          traceManager.getLastSorted(),
          [],
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
      [],
      [],
      [],
      [pivot, left - 1]
    );

    swap(nums, pivot, left - 1);

    // Swap pivot
    traceManager.add(
      nums,
      traceManager.getLastSorted(),
      [],
      [],
      [],
      [pivot, left - 1]
    );

    pivot = left - 1;

    // Select pivot
    traceManager.add(nums, traceManager.getLastSorted(), [], [pivot]);

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

export const quickSortLegend = createLegend(
  'Comparing',
  'Pivot',
  'Targeting',
  'Swapping'
);

export const quickSortTitle: ITitle = 'Quick Sort';

export const quickSortDescription: IDescription = (
  <div>
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Quicksort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quick Sort
      </a>{' '}
      is an efficient, in-place sorting algorith that in practice is faster than
      MergeSort and HeapSort. However, it is not a stable sorting algorithm,
      meaning that the relative positioning of equal sort items is not
      preserved.Quicksort is a divide and conquer algorithm. Quicksort first
      divides a large array into two smaller sub-arrays: the low elements and
      the high elements. Quicksort can then recursively sort the sub-arrays. The
      steps are:
    </p>
    <ol>
      <li>
        Pick an element, called a pivot, from the array. This is usually done at
        random.
      </li>
      <li>Move pivot element to the start of the array.</li>
      <li>
        <em>Partitioning:</em> reorder the array so that all elements with
        values less than the pivot come before the pivot, while all elements
        with values greater than the pivot come after it (equal values can go
        either way). After this partitioning, the pivot is in its final
        position. This is called the <em>partition</em> operation.
      </li>
      <li>
        Recursively apply the above steps to the sub-array of elements with
        smaller values and separately to the sub-array of elements with greater
        values.
      </li>
    </ol>
    <p>
      The base case of the recursion is an array of size zero or one, which are
      sorted by definition.
    </p>
  </div>
);

export const quickSortPerformance: IPerformance = createPerformance(
  <span>
    O(n<sup>2</sup>)
  </span>,
  <span>
    O(<em>n</em> log <em>n</em>)
  </span>,
  <span>
    O(<em>n</em> log <em>n</em>)
  </span>,
  <span>
    O(log <em>n</em>)
  </span>
);

export const quickSortCode: ICode = ``;

export default quickSort;
