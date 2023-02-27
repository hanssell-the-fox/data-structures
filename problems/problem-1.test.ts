import { containsCommonItem } from "./problem-1.ts";

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
const array3 = ["z", "y", "i"];

console.log(containsCommonItem(array1, array2)); // should return true
console.log(containsCommonItem(array1, array3)); // should return false
