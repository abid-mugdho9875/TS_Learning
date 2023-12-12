import addNumbers, {
  addString,
  arrayMutate,
  getName,
  printFormat,
} from "./function";

console.log(addNumbers(10, 20));
console.log(addString("a", "b"));
console.log(printFormat("a", 10));
console.log(getName({ first: "jack", last: "herrington" }));
console.log(arrayMutate([1, 2, 3, 4], (v) => v * 10));
console.log(arrayMutate([1, 2, 3, 4], (v) => v * 109));
