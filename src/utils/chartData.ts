import { ISortChartData } from '../components/molecules/SortChart/SortChart';
import selectionSort from './algorithms/selectionSort';

const generateRandomNums = (size: number, maxValue: number) => {
  const nums: number[] = [];
  for (let i = 0; i < size; i++) {
    const randomNum = generateRandomNum(maxValue);
    nums.push(randomNum);
  }
  return nums;
};

const generateRandomNum = (maxValue: number): number => {
  return Math.round(Math.random() * maxValue);
};

interface IRandomChartDataProps {
  size: number;
  maxValue?: number;
}

export default function generateChartData({
  size,
  maxValue = 100,
}: IRandomChartDataProps): ISortChartData[] {
  const nums = generateRandomNums(size, maxValue);
  return selectionSort(nums);
}
