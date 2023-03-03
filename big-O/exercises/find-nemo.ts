// deno-lint-ignore-file no-unused-vars

// Theses functions will loop through an array of names and show the message "Found DENO!"
// for every name that is equal to Nemo

// O(n) --> Linear Time
function findNemo(fishNames: string[]): void {
  for (let index = 0; index < fishNames.length; index++) {
    if (isNemo(fishNames[index])) foundNemo();
  }
}

// O(n) --> Linear Time
function findNemo2(fishNames: string[]): void {
  fishNames.forEach((fish: string) => {
    if (isNemo(fish)) foundNemo();
  });
}

// O(n) --> Linear Time
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
