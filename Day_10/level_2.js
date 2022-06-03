// LEVEL 2

// 1
let a = [4, 5, 8, 9]
let b = [3, 4, 5, 7]
let c = [...a,...b]

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C)

// 2
let d = [1,2,3,4,5]
let e = [3,4,5,6]

let D = new Set(d);
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)
console.log(F)

