import {
  createLegend,
  createPerformance,
  ILegend,
  IPerformance,
  swap,
} from './helper';
import { ISortChart } from './ISortChart';
import { TraceManager } from './trace';
import React from 'react';
import { ISortChartData } from '../../components/molecules/SortChart/SortChart';

export class SelectionSortChart implements ISortChart {
  sort(nums: number[]): ISortChartData[] {
    // Init trace manager
    const traceManager = new TraceManager(nums);

    const dataSize = nums.length;
    for (let i = 0; i < dataSize - 1; i++) {
      let minIndex = i;

      // Set current min
      traceManager.add(nums, traceManager.getLastSorted(), [], [minIndex]);

      for (let j = i + 1; j < dataSize; j++) {
        // Comparing
        traceManager.add(nums, traceManager.getLastSorted(), [minIndex, j]);

        if (nums[j] < nums[minIndex]) {
          minIndex = j;

          // Set current min
          traceManager.add(nums, traceManager.getLastSorted(), [], [minIndex]);
        }
      }

      // Swap
      traceManager.add(
        nums,
        traceManager.getLastSorted(),
        [],
        [],
        [],
        [i, minIndex]
      );

      swap(nums, i, minIndex);

      // Swap
      traceManager.add(
        nums,
        traceManager.getLastSorted(),
        [],
        [],
        [],
        [i, minIndex]
      );

      // Partial sorted trace
      traceManager.add(nums, [...traceManager.getLastSorted(), i]);
    }

    // Last sorted trace
    traceManager.add(nums, [...traceManager.getLastSorted(), dataSize - 1]);

    return traceManager.getTrace();
  }

  getLegend(): ILegend {
    return createLegend('Comparing', 'Setting current min', null, 'Swapping');
  }

  getTitle(): string {
    return 'Selection Sort';
  }

  getDescription(): JSX.Element {
    return (
      <div>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Selection_sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Selection Sort
          </a>{' '}
          is an in-place comparison sorting algorithm that divides the input
          list into two parts: the sublist of items already sorted, which is
          built up from left to right at the front (left) of the list, and the
          sublist of items remaining to be sorted that occupy the rest of the
          list. Initially, the sorted sublist is empty and the unsorted sublist
          is the entire input list. The algorithm proceeds by finding the
          smallest element in the unsorted sublist, exchanging (swapping) it
          with the leftmost unsorted element (putting it in sorted order), and
          moving the sublist boundaries one element to the right.
        </p>
      </div>
    );
  }

  getPerformance(): IPerformance {
    return createPerformance(
      <span>
        O(n<sup>2</sup>)
      </span>,
      <span>
        O(n<sup>2</sup>)
      </span>,
      <span>
        O(n<sup>2</sup>)
      </span>,
      <span>O(1)</span>
    );
  }

  getCode(): string {
    return `
function selectionSort(nums: number[]): void {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    const temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }
}
`;
  }
}


