interface Coordinate {
  x: number;
  y: number;
}
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown) {
  let cord: Coordinate = {
    x: 0,
    y: 0,
  };
  if (typeof arg1 === "object") {
    cord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      cord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    cord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return cord;
}

//console those function
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 12, y: 14 }));
console.log(parseCoordinate("x:10,y:12"));
