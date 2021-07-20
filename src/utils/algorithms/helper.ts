export const swap = (arr: any[], indexA: number, indexB: number) => {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
};
