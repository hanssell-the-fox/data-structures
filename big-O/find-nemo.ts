import { bigInput, largeInput, smallInput } from "./data/nemo.ts";

// Everyone of this functions runs on the same BIG O timing (O(n) --> Linear Time)
findNemo(smallInput);
findNemo(bigInput);
findNemo(largeInput);

// O(n) --> Linear Time
function findNemo(fishNames: string[]): void {
  for (let index = 0; index < fishNames.length; index++) {
    if (isNemo(fishNames[index])) foundNemo();
  }
}

function findNemo2(fishNames: string[]): void {
  fishNames.forEach((fish: string) => {
    if (isNemo(fish)) foundNemo();
  });
}

function findNemo3(fishNames: string[]): void {
  for (const fish of fishNames) {
    if (isNemo(fish)) foundNemo();
  }
}

function isNemo(name: string): boolean {
  return name === "nemo";
}

function foundNemo(): void {
  console.log("Found NEMO!");
}
