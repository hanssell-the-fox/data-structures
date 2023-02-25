// deno-lint-ignore-file prefer-const no-unused-vars

// Calc the Big O of the following function
//
// What is the Big O of the below function?
// (Hint, you may want to go line by line)

function funChallenge(input: unknown[]) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }

  return a;
}

// Dummy function
function anotherFunction() {}
