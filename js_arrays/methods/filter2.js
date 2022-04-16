let nums= [ 50, 40, 10, 16, 12 ];
let range = { bottom: 45, top: 100};
let teenagers = nums.filter(function (person, id, arr) {
    return arr[id] + arr[id]
},range)

console.log(teenagers)
let nums2= [ 50, 40, 10, 16, 12 ];
let r =  nums2.map(e => e+e)
console.log(r)
