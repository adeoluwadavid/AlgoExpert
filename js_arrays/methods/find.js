// Returns the value of the first element in an array that pass a test
const ages = [3, 10, 18, 20,23,34];

function checkAge(age) {
  return age > 18;
}
let result = ages.find(checkAge)
console.log(result)