/**
 * 
 * Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.
 * No sides equal: "scalene"
 * Two sides equal: "isosceles"
 * All sides equal: "equilateral"
 * Less or more than 3 sides given: "not a triangle"
 * @param arr 
 */

const getTriangleType = (arr: number[]): string => {
  if (arr.length !== 3) return "not a triangle";

  /**
   * The Set object lets you store unique values of any type, whether primitive values or object references.
   * Returns the number of values in the Set object.
   */
  return ["equilateral", "isosceles", "scalene"][new Set(arr).size - 1];
};

console.log(getTriangleType([9, 1, 5]));
