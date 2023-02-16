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

//вывести все эелементы из первого массива(example1)
for (let i = 0; i < example1.length; i++) {
  console.log(example1[i]);
}

//вывести все эелементы из второго многоуровневого массива(example2)
for (let i = 0; i < example2.length; i++) {
  for (let j = 0; j < example2[i].length; j++) {
    console.log(example2[i][j]);
  }
}

//код проверяющий существует ли какое то число
let example3 = [4, 1, 7, 10, 11, 10, 33];
if (example3.includes(10)) {
  //includes проверяет существует ли число в массиве
  console.log("yes");
} else {
  console.log("no");
}
