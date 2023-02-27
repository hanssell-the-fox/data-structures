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

import { KeyMap } from "./types.ts";

// Brute-force approach for this solution
// O(a*b)
export function containsCommonItem(arr1: unknown[], arr2: unknown[]): boolean {
  for (const item of arr1) {
    for (const match of arr2) {
      if (item === match) return true;
    }
  }

  return false;
}

// Efficient approach for this solution
// O(a+b)
export function containsCommonItem2(arr1: unknown[], arr2: unknown[]): boolean {
  const mappedArray = new KeyMap().from(arr1);
  return mapContainsItem(mappedArray, arr2);
}

function mapContainsItem(map: KeyMap, array: unknown[]): boolean {
  return array.some((item) => map.contains(item as string));
}
