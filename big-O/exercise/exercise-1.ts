// deno-lint-ignore-file prefer-const no-unused-vars

// Calc the Big O of the following function
//
// What is the Big O of the below function?
// (Hint, you may want to go line by line)

//
// The following function will run on O(3 + 4n) --> O(n)
//
function funChallenge(input: unknown[]): number {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }

  return a; // O(1)
}

// Dummy function
function anotherFunction(): void {}