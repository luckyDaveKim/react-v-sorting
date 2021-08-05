export const swap = (arr: any[], indexA: number, indexB: number) => {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
};

export const createRange = (start: number, end: number) => {
  return [...Array(end - start + 1).keys()].map(i => i + start);
};

export interface ILegend {
  groupA: string | null;
  groupB: string | null;
  groupC: string | null;
  groupD: string | null;
  sorted: string;
}

export const createLegend = (
  groupA: string | null = null,
  groupB: string | null = null,
  groupC: string | null = null,
  groupD: string | null = null
): ILegend => {
  return {
    groupA,
    groupB,
    groupC,
    groupD,
    sorted: 'Sorted',
  };
};
