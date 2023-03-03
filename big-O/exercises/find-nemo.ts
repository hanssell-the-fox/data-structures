// deno-lint-ignore-file no-unused-vars

// These functions will loop through an array of names and show the message
// "Found DENO!" for every name that is equal to Nemo

// O(n) --> Linear Time
function findNemo(fishNames: string[]): void {
  for (let index = 0; index < fishNames.length; index++) {
    checkIfThatIsNemo(fishNames.at(index)!);
  }
}

// O(n) --> Linear Time
function findNemo2(fishNames: string[]): void {
  fishNames.forEach((name: string) => {
    checkIfThatIsNemo(name);
  });
}

// O(n) --> Linear Time
function findNemo3(fishNames: string[]): void {
  for (const name of fishNames) {
    checkIfThatIsNemo(name);
  }
}

function checkIfThatIsNemo(fishName: string): void {
  if (fishName.toLowerCase() === "nemo") {
    console.log("Found NEMO!");
  }
}
