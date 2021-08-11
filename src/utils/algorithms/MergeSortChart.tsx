import { ISortChart } from './ISortChart';
import { TraceManager } from './trace';
import {
  createLegend,
  createPerformance,
  createRange,
  ILegend,
  IPerformance,
} from './helper';
import React from 'react';
import { ISortChartData } from '../../components/molecules/SortChart/SortChart';

export class MergeSortChart implements ISortChart {
  sort(nums: number[]): ISortChartData[] {
    // Init trace manager
    const traceManager = new TraceManager(nums);

    function recursiveMergeSort(nums: number[], start: number, end: number) {
      // Divide
      traceManager.add(nums, [], createRange(start, end));

      if (start === end) return;

      const mid = Math.floor((start + end) / 2);

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
        traceManager.add(nums, [], [], [], [], [i]);

        i++;
      }

      while (left < leftPart.length) {
        nums[i] = leftPart[left++];

        // Combine
        traceManager.add(nums, [], [], [], [], [i]);

        i++;
      }

      while (right < rightPart.length) {
        nums[i] = rightPart[right++];

        // Combine
        traceManager.add(nums, [], [], [], [], [i]);

        i++;
      }
    }

    recursiveMergeSort(nums, 0, nums.length - 1);

    // All sorted trace
    traceManager.add(nums, [...Array(nums.length).keys()]);

    return traceManager.getTrace();
  }

  getLegend(): ILegend {
    return createLegend('Targeting', null, null, 'Combined');
  }

  getTitle(): string {
    return 'Merge Sort';
  }

  getDescription(): JSX.Element {
    return (
      <div>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Merge_sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merge Sort
          </a>{' '}
          is an efficient, stable sorting algorith that makes use of the divide
          and conquer strategy. Conceptually the algorithm works as follows:
        </p>
        <ol>
          <li>
            Divide the unsorted list into <em>n</em> sublists, each containing
            one element(a list of one element is considered sorted)
          </li>
          <li>
            Repeatedly merge sublists to produce new sorted sublists until there
            is only one sublist remaining. This will be the sorted list.
          </li>
        </ol>
      </div>
    );
  }

  getPerformance(): IPerformance {
    return createPerformance(
      <span>
        O(<em>n</em> log <em>n</em>)
      </span>,
      <span>
        O(<em>n</em> log <em>n</em>)
      </span>,
      <span>
        O(<em>n</em> log <em>n</em>)
      </span>,
      <span>O(1)</span>
    );
  }

  getCode(): string {
    return '';
  }
}
