let example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let example2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(example1.length);
console.log(example2.length);
console.log(example1[2]);
console.log(example2[2]);

console.log(example1[4]);
console.log(example1[7]);

console.log(example2[1][1]);

//другой вариант
let test = example2[2];
console.log(test[1]);

for (let i = 0; i < example1.length; i++) {
  console.log(example1[i]);
}
