import {
  createLegend,
  createPerformance,
  ILegend,
  IPerformance,
  swap,
} from './helper';
import { TraceManager } from './trace';
import React from 'react';
import { ISortChart } from './ISortChart';
import { ISortChartData } from '../../components/molecules/SortChart/SortChart';

export class BubbleSortChart implements ISortChart {
  sort(nums: number[]): ISortChartData[] {
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
  }

  getLegend(): ILegend {
    return createLegend('Comparing', null, null, 'Swapping');
  }

  getTitle(): string {
    return 'Bubble Sort';
  }

  getDescription(): JSX.Element {
    return (
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
          order.The pass through the list is repeated until the list is sorted.
          The algorithm, which is a comparison sort, is named for the way
          smaller or larger elements "bubble" to the top of the list. Although
          the algorithm is simple, it is too slow and impractical for most
          problems
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
      <span>O(n)</span>,
      <span>O(1)</span>
    );
  }

  getCode(): string {
    return '';
  }
}
