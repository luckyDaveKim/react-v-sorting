import { ISortChartData } from '../components/molecules/SortChart/SortChart';
import { ISort } from './algorithms/ISort';

const createRandomNums = (size: number, maxValue: number) => {
  const nums: number[] = [];
  for (let i = 0; i < size; i++) {
    const randomNum = createRandomNum(maxValue);
    nums.push(randomNum);
  }
  return nums;
};

const createRandomNum = (maxValue: number): number => {
  return Math.floor(Math.random() * maxValue) + 1;
};

interface IRandomChartDataProps {
  size: number;
  maxValue?: number;
  algorithm: ISort;
}

export default function createChartData({
  size,
  maxValue = 100,
  algorithm,
}: IRandomChartDataProps): ISortChartData[] {
  const nums = createRandomNums(size, maxValue);
  return algorithm(nums);
}
