import { assertEquals } from "./deps.ts";
import { hasMatchingPairs } from "../equal-to-sum.ts";

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];

Deno.test("Should return false for a non matching array", () => {
  assertEquals(false, hasMatchingPairs(array1, 8));
});

Deno.test("Should return true for a matching array", () => {
  assertEquals(true, hasMatchingPairs(array2, 8));
});

Deno.test("Should return false for an empty array", () => {
  assertEquals(false, hasMatchingPairs([], 8));
});

Deno.test("Should return false for a negative sum", () => {
  assertEquals(false, hasMatchingPairs(array1, -8));
});
