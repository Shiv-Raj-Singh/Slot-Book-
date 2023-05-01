const arr = [1,3,6,9]
console.log(arr);
const ans = arr.map((a,i,ar) => ar[i] = a*5)

console.log(ans, arr);