/**
 * The some() method checks if any array elements pass a test (provided as a function).

The some() method executes the function once for each array element:

If the function returns true, some() returns true and stops.
If the function returns false, some() returns false and stops.
The some() method does not execute the function for empty array elements.

The some() method does not change the original array.
 */
const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

