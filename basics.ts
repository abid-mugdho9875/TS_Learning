let userName: string = " abid";
let hasLoggedIn: boolean = true;

userName += " hasan";

console.log(userName);
console.log(hasLoggedIn);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;
const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3]; // generic types in java

//learning about interface

interface myPerson {
  first: string;
  last: string;
}
const myPerson: myPerson = {
  first: "abid",
  last: "hasan",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "d";

if ((ids[30] = "d")) {
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => {
  console.log(v);
});

const out: string[] = [4, 5, 6].map((v) => `{v * 10}`);

console.log(out);
