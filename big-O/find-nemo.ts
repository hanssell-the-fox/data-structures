import { bigInput, largeInput, smallInput } from "./data/nemo.ts";

// Everyone of this functions runs on the same BIG O timing (O(n) --> Linear Time)
findNemo(smallInput);
findNemo(bigInput);
findNemo(largeInput);

// O(n) --> Linear Time
function findNemo(names: string[]): void {
  // I, personally, would like to use the following implementation for this exercise
  // but, the purpose is to know how to implement the algorithm
  // names.forEach((name) => {
  //   if (isNemo(name)) foundNemo();
  // });

  for (let index = 0; index < names.length; index++) {
    if (isNemo(names[index])) foundNemo();
  }
}

function isNemo(name: string): boolean {
  return name === "nemo";
}

function foundNemo(): void {
  console.log("Found NEMO!");
}
