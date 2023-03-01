// Given 2 arrays, create a function that let's the user know (true/false),
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

// --
// Observations:
// Has 2 parameters - Always is arrays - Has no size limit
// Returns TRUE/FALSE
// --

// O(a*b) Runtime - Brute-force approach (Not efficient)
export function containsCommonItem(
  firstArray: unknown[],
  secondArray: unknown[],
): boolean {
  for (const item of firstArray) {
    for (const otherItem of secondArray) {
      if (item === otherItem) return true;
    }
  }

  return false;
}

// O(a+b) Runtime - Efficient approach
export function containsCommonItem2(
  firstArray: unknown[],
  secondArray: unknown[],
): boolean {
  const mappedItems = createMapFrom(firstArray);
  return hasEqualItem(mappedItems, secondArray);
}

function createMapFrom(array: unknown[]): Map<string, boolean> {
  const mapOfItems = new Map<string, boolean>();
  array.forEach((item) => mapOfItems.set(`${item}`, true));
  return mapOfItems;
}

function hasEqualItem(
  map: Map<string, boolean>,
  array: unknown[],
): boolean {
  return array.some((item) => map.has(`${item}`));
}

// O(a+b) Runtime - Languages efficient approach
export function containsCommonItem3(
  firstArray: unknown[],
  secondArray: unknown[],
): boolean {
  return firstArray.some((item) => secondArray.includes(item));
}
