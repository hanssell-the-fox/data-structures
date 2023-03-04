import { assertEquals } from "./deps.ts";
import {
  listsHasSomeCommonItem,
  listsHasSomeCommonItemV2,
  listsHasSomeCommonItemV3,
} from "../item-in-array.ts";

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
const array3 = ["z", "y", "i"];

const array4 = [1, 2.2, 3, 4];
const array5 = [9, 10, 2.2];
const array6 = [9, 10, 15];

const array7 = [1, null, undefined, {}, []];
const array8 = [[], false, 4];

Deno.test("Testing O(n * m) - Brute force", async (t) => {
  await t.step("STRINGS should return true", () => {
    const result = listsHasSomeCommonItem(array1, array2);
    assertEquals(true, result);
  });

  await t.step("STRINGS should return false", () => {
    const result = listsHasSomeCommonItem(array1, array3);
    assertEquals(false, result);
  });

  await t.step("NUMBERS should return true", () => {
    const result = listsHasSomeCommonItem(array4, array5);
    assertEquals(true, result);
  });

  await t.step("NUMBERS should return false", () => {
    const result = listsHasSomeCommonItem(array4, array6);
    assertEquals(false, result);
  });

  await t.step("Comparing array with no type", () => {
    const result = listsHasSomeCommonItem(array7, array8);
    assertEquals(false, result);
  });
});

Deno.test("Testing O(n + m) - Better performance", async (t) => {
  await t.step("STRINGS should return true", () => {
    const result = listsHasSomeCommonItemV2(array1, array2);
    assertEquals(true, result);
  });

  await t.step("STRINGS should return false", () => {
    const result = listsHasSomeCommonItemV2(array1, array3);
    assertEquals(false, result);
  });

  await t.step("NUMBERS should return true", () => {
    const result = listsHasSomeCommonItemV2(array4, array5);
    assertEquals(true, result);
  });

  await t.step("NUMBERS should return false", () => {
    const result = listsHasSomeCommonItemV2(array4, array6);
    assertEquals(false, result);
  });

  await t.step("Comparing array with no type", () => {
    const result = listsHasSomeCommonItemV2(array7, array8);
    assertEquals(false, result);
  });
});

Deno.test("Testing O(n + m) - Language method", async (t) => {
  await t.step("STRINGS should return true", () => {
    const result = listsHasSomeCommonItemV3(array1, array2);
    assertEquals(true, result);
  });

  await t.step("STRINGS should return false", () => {
    const result = listsHasSomeCommonItemV3(array1, array3);
    assertEquals(false, result);
  });

  await t.step("NUMBERS should return true", () => {
    const result = listsHasSomeCommonItemV3(array4, array5);
    assertEquals(true, result);
  });

  await t.step("NUMBERS should return false", () => {
    const result = listsHasSomeCommonItemV3(array4, array6);
    assertEquals(false, result);
  });

  await t.step("Comparing array with no type", () => {
    const result = listsHasSomeCommonItemV3(array7, array8);
    assertEquals(false, result);
  });
});
