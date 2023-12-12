/**
 * Creates a simple state management system for a numeric value.
 *
 * @param initial - The initial value for the state.
 * @returns A tuple containing getter and setter functions for the state.
 *
 * @example
 * // Usage:
 * const [getValue, setValue] = simpleStringState(120);
 * console.log(getValue()); // Output: 120
 * setValue(160);
 * console.log(getValue()); // Output: 1600
 */
function simpleStringState(
  initial: number
): [() => number, (v: number) => void] {
  let str: number = initial;

  return [
    // Getter function
    () => str,

    // Setter function
    (v: number) => {
      str = v * 10;
    },
  ];
}

const [str1getter, str1setter] = simpleStringState(120);
console.log(str1getter()); // Output: 120
str1setter(160);
console.log(str1getter()); // Output: 1600
