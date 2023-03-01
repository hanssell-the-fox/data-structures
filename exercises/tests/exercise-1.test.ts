import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import {
  containsCommonItem,
  containsCommonItem2,
  containsCommonItem3,
} from "../exercise-1.ts";

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
const array3 = ["z", "y", "i"];

const array4 = [1, 2.2, 3, 4];
const array5 = [9, 10, 2.2];
const array6 = [9, 10, 15];

Deno.test("Testing brute force method", async (t) => {
  await t.step("Comparing STRINGS should return true", () => {
    const result = containsCommonItem(array1, array2);
    assertEquals(true, result);
  });

  await t.step("Comparing STRINGS should return false", () => {
    const result = containsCommonItem(array1, array3);
    assertEquals(false, result);
  });

  await t.step("Comparing NUMBERS should return true", () => {
    const result = containsCommonItem(array4, array5);
    assertEquals(true, result);
  });

  await t.step("Comparing NUMBERS should return false", () => {
    const result = containsCommonItem(array4, array6);
    assertEquals(false, result);
  });
});

Deno.test("Testing better method", async (t) => {
  await t.step("Comparing STRINGS should return true", () => {
    const result = containsCommonItem2(array1, array2);
    assertEquals(true, result);
  });

  await t.step("Comparing STRINGS should return false", () => {
    const result = containsCommonItem2(array1, array3);
    assertEquals(false, result);
  });

  await t.step("Comparing NUMBERS should return true", () => {
    const result = containsCommonItem2(array4, array5);
    assertEquals(true, result);
  });

  await t.step("Comparing NUMBERS should return false", () => {
    const result = containsCommonItem2(array4, array6);
    assertEquals(false, result);
  });
});

Deno.test("Testing language efficient method", async (t) => {
  await t.step("Comparing STRINGS should return true", () => {
    const result = containsCommonItem3(array1, array2);
    assertEquals(true, result);
  });

  await t.step("Comparing STRINGS should return false", () => {
    const result = containsCommonItem3(array1, array3);
    assertEquals(false, result);
  });

  await t.step("Comparing NUMBERS should return true", () => {
    const result = containsCommonItem3(array4, array5);
    assertEquals(true, result);
  });

  await t.step("Comparing NUMBERS should return false", () => {
    const result = containsCommonItem3(array4, array6);
    assertEquals(false, result);
  });
});
