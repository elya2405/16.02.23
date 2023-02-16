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

// задача проверяющее есть ли элемент из одного массива во второй
let example4 = [5, 4, 1, 55, 1, 0, 2];
let example5 = [3, 11, 4, 15, 1, 2, 77];

for (let i = 0; i < example4.length; i++) {
  if (example5.includes(example4[i])) {
    console.log(example4[i]);
  }
}

let example6 = ["a", "c", "f", "d", "b"];
console.log(example6.reverse()); //reverse делает наоброт
//другой вариант
console.log(example6);

example6.sort(); //sort сортирует
console.log(example6);

//сортировка чисел
let example7 = [10, 51, 44, 2, 3, 6];
example7.sort(function (a, b) {
  return a - b; //если надо отсортировать в убывающем порядке делаем b - a
});
console.log(example7);

let carPrice = [4000, 3000, 4000, 8000, 5000, 3000, 7000, 12000, 100000, 1000];
let totalPrice = 0;
for (let i = 0; i < carPrice.length; i++) {
  totalPrice = totalPrice + carPrice[i];
}
console.log(totalPrice / carPrice.length);

carPrice.sort(function (a, b) {
  return a - b;
});
let medianPrise = (carPrice[4] + carPrice[5]) / 2;
console.log(medianPrise);
