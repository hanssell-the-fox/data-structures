// Given a sorted array of positive numbers, find the first pair in the array that
// sum up to the given value
//
// For example:
//  const array1 = [1, 2, 3, 9] | Sum = 8;
//  should return false (no matching pairs)
// --
//  const array1 = [1, 2, 4, 4] | Sum = 8;
//  should return true

// O(n) Runtime
export function hasMatchingPairs(
  arrayOfNumbers: number[],
  sum: number,
): boolean {
  if (isEmpty(arrayOfNumbers) || sum < 0) {
    return false;
  }

  const lookupNumbers = new Set();

  for (const number of arrayOfNumbers) {
    const neededNumber = sum - number;

    if (neededNumber < 0) {
      continue;
    }

    if (lookupNumbers.has(neededNumber)) {
      return true;
    }

    lookupNumbers.add(neededNumber);
  }

  return false;
}

function isEmpty(array: number[]): boolean {
  return array.length === 0;
}
