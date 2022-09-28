'use strict'


// ++++++++++++++++++++++++++++ Вывести наименьший элемент массива ++++++++++++++++++++++++++++++



// Создаю массив елементов от 1 до 100 при помощи цикла "for", методов floor и random

let array = [];
for (let i = 0; i<10; i++) {
    array[i] = Math.floor(Math.random()*100)+1
};

// Перебираю массив в поиске наименьшего элемента при помощи цикла "for" и условной конструкции "if"

let minNumberElementOfArray = array[0];
for (let i = 0; i<array.length; i++) {
    if (minNumberElementOfArray >= array[i]) {
        minNumberElementOfArray = array[i]
    }
};

// Вывожу массив и наименьший элемент массива, используя шаблонную запись

console.log(`Массив "array" - [${array}]`);
console.log(`Наименьший элемент массива - ${minNumberElementOfArray}`);








