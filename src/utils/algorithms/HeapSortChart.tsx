import {
  createLegend,
  createPerformance,
  createRange,
  ILegend,
  IPerformance,
  swap,
} from './helper';
import { ISortChart } from './ISortChart';
import { TraceManager } from './trace';
import React from 'react';
import { ISortChartData } from '../../components/molecules/SortChart/SortChart';

export class HeapSortChart implements ISortChart {
  sort(nums: number[]): ISortChartData[] {
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
        traceManager.add(
          nums,
          traceManager.getLastSorted(),
          [],
          [],
          [],
          [0, i]
        );

        swap(nums, 0, i);

        // Swap
        traceManager.add(
          nums,
          traceManager.getLastSorted(),
          [],
          [],
          [],
          [0, i]
        );

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
  }

  getLegend(): ILegend {
    return createLegend('Comparing', null, 'Target heapify', 'Swapping');
  }

  getTitle(): string {
    return 'Heap Sort';
  }

  getDescription(): JSX.Element {
    return (
      <div>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Heapsort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heap Sort
          </a>{' '}
          can be thought of as an improved selection sort that uses the heap
          data structure rather than a linear-time search to find the maximum or
          minimum element. It is an in-place sorting algorithm that is not
          stable and has a somewhat slower running time than Quicksort in
          practice.
        </p>
        <p>
          The heapsort algorithm can be divided into two parts. In the first
          step, a heap is built out of the data. The heap is often placed in an
          array with the layout of a complete binary tree. In the second step, a
          sorted array is created by repeatedly removing the largest element
          from the heap (the root of the heap), and inserting it into the array.
          The heap is updated after each removal to maintain the heap property.
          Once all objects have been removed from the heap, the result is a
          sorted array.
        </p>
        <ol>
          <li>
            Call the buildMaxHeap() function on the list. Also referred to as
            heapify(), this builds a heap from a list in O(n) operations.
          </li>
          <li>
            Swap the first element of the list with the final element. Decrease
            the considered range of the list by one.
          </li>
          <li>
            Call the <em>siftDown()</em>, also called <em>maxHeapify()</em>{' '}
            function on the list to sift the new first element to its
            appropriate index in the heap.
          </li>
          <li>
            Go to step (2) unless the considered range of the list is one
            element.
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
