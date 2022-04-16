// Checks if every element in an array pass a test
// Returns false if not true

const ages = [32, 33, 16, 40];

function checkAge(age) {
  return age > 18;
}
let answer = ages.every(checkAge)
console.log(answer)