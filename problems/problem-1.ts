// deno-lint-ignore-file no-unused-vars

// Given 2 arrays, create a function that returns let's the user know (true/false),
// whether these two arrays contain any common items
//
// For example:
//  const array1 = ['a', 'b', 'c', 'x'];
//  const array2 = ['z', 'y', 'i'];
//  should return false
// --
//  const array1 = ['a', 'b', 'c', 'x'];
//  const array2 = ['z', 'y', 'x'];
//  should return true

// Observations:
// Has 2 parameters - Always is arrays - Has no size limit
// Returns TRUE/FALSE

// TESTS
{
  const array1 = ["a", "b", "c", "x"];
  const array2 = ["z", "y", "x"];
  const array3 = ["z", "y", "i"];

  console.log(containsCommonItem(array1, array2)); // should return true
  console.log(containsCommonItem(array1, array3)); // should return false
}

// Brute-force approach for this solution
// O(a*b)
function containsCommonItem(arr1: unknown[], arr2: unknown[]): boolean {
  for (const item of arr1) {
    for (const match of arr2) {
      if (item === match) return true;
    }
  }

  return false;
}
