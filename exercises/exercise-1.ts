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

// Brute force approach (Not efficient)
// Runtime Cost - O(n * m)
// Space Cost   - O(1)
export function listsHasSomeCommonItem(
  firstList: unknown[],
  secondList: unknown[],
): boolean {
  for (const someItem of firstList) {
    for (const otherItem of secondList) {
      if (someItem === otherItem) return true;
    }
  }

  return false;
}

// Better approach (Efficient)
// Runtime Cost - O(n + m)
// Space Cost   - O(n)
export function listsHasSomeCommonItemV2(
  firstList: unknown[],
  secondList: unknown[],
): boolean {
  // This let us always compare the smallest list to the bigger, reducing the amount
  // of time needed
  const [smallerList, largerList] = compareListsBySize(firstList, secondList);

  // Map all items from the smaller list to an object
  // (Brings better performance than just comparing two arrays)
  const mappedList = mapItemsFrom(smallerList);

  // Compare each item from the larger list with the map
  for (const item of largerList) {
    if (mappedList.has(item)) {
      return true;
    }
  }

  return false;
}

function compareListsBySize(first: unknown[], second: unknown[]): unknown[][] {
  return first.length < second.length ? [first, second] : [second, first];
}

// Create a map from the items in the list
// ex: [1, 2] will be { 1: true, 2: true }
function mapItemsFrom(list: unknown[]): Map<unknown, boolean> {
  const map = new Map<unknown, boolean>();

  for (const item of list) {
    map.set(item, true);
  }

  return map;
}

// O(a+b) Runtime - Languages efficient approach
export function containsCommonItem3(
  firstArray: unknown[],
  secondArray: unknown[],
): boolean {
  return firstArray.some((item) => secondArray.includes(item));
}
