export const swap = (arr: any[], indexA: number, indexB: number) => {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
};

export const createRange = (start: number, end: number) => {
  return [...Array(end - start + 1).keys()].map(i => i + start);
};
