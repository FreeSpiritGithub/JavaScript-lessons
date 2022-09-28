'use strict'


// ++++++++++++++++++++++++++++ Подсчет суммы элементов массива ++++++++++++++++++++++++++++++




// Создаю массив "arrayOld" при помощи цикла while, методов floor и random

let arrayOld = [];
let i = 0;
while (i<10) {
    arrayOld[i] = (Math.floor(Math.random()*10));
    i++;
};

// Вычисляю сумму єлементов массива "arrayOld" при помощи цикла "for"

let sumOfArrayElementsarrayOld = 0;
for (let i=0; i<arrayOld.length; i++) {
    sumOfArrayElementsarrayOld = sumOfArrayElementsarrayOld + arrayOld.at(i)
};

/* Создаю копию массива  - "arrayNew" при помощи метода "map", 
увеличиваю значение каждого элемента в массиве "arrayNew" на 1 относительно массива "arrayOld";
подсчитываю сумму элементов массива "arrayNew" при помощи метода forEach.*/

let sumOfArrayElementsarrayNew = 0;
let arrayNew = arrayOld.map((element) => element + 1);
arrayNew.forEach(element => {
    sumOfArrayElementsarrayNew = sumOfArrayElementsarrayNew += element
});

// Вывожу массив "arrayOld" и сумму элементов массива "arrayOld", используя шаблонную запись

console.log(`Массив "arrayOld" - [${arrayOld}]`);
console.log(`Сумма элементов массива "arrayOld" - ${sumOfArrayElementsarrayOld}`);

// Вывожу массив "arrayNew" и сумму элементов массива "arrayNew", используя шаблонную запись

console.log(`Массив "arrayNew" - [${arrayNew}]`);
console.log(`Сумма элементов массива "arrayNew" - ${sumOfArrayElementsarrayNew}`);
