// deno-lint-ignore-file prefer-const no-unused-vars

// Calc the Big O of the following function
//
// What is the Big O of the below function?
// (Hint, you may want to go line by line)

//
// The following function will run on O(3 + 4n) --> O(n)
//
function funChallenge(input: unknown[]): number {
  let someNumber = 10; // O(1)
  someNumber = 50 + 3; // O(1)

  for (let index = 0; index < input.length; index++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    someNumber++; // O(n)
  }

  return someNumber;
}

// Dummy function
function anotherFunction(): void {
  // Do nothing
}
