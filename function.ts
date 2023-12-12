function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addString = (a: string, b: string): string => `${a} ${b}`;
export const printFormat = (title: string, param: string | number): void => {
  console.log(title, param);
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export const introduce = (salutation: string, ...names: string[]): string => {
  return `${salutation}  ${names.join(" ")}`;
};

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}

//function inside function

export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}

//we can try another method

export type mutationFunction = (v: number) => number;
export function arrayMutate_another(
  numbers: number[],
  mutate: mutationFunction
): number[] {
  return numbers.map(mutate);
}
