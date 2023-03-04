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
// Runtime Cost - O(n * m)
// Space Cost   - O()
export function listsHasSomeCommonItemV2(
  firstList: unknown[],
  secondList: unknown[],
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
