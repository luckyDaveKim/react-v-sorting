import { ISortChartData } from '../components/molecules/SortChart/SortChart';
import { ISort } from './algorithms/ISort';

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
  algorithm: ISort;
}

export default function generateChartData({
  size,
  maxValue = 100,
  algorithm,
}: IRandomChartDataProps): ISortChartData[] {
  const nums = generateRandomNums(size, maxValue);
  return algorithm(nums);
}
