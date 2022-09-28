'use strict'


// ++++++++++++++++++++++++++++ Вывести наибольший элемент массива ++++++++++++++++++++++++++++++



// Создаю массив елементов от 1 до 100 при помощи цикла "while", методов floor и random

let array = [];
let i = 0;
while (i<10) {
array[i] = (Math.floor(Math.random()*100))+1
i++;
};

// Перебираю массив в поиске наибольшего элемента при помощи цикла "for" и условной конструкции "if"

let maxNumberElementOfArray = array[0];
array.forEach(element => {
    if (maxNumberElementOfArray <= element) {
        maxNumberElementOfArray = element
    }
});

// Вывожу массив и наибольший элемент массива, используя шаблонную запись

console.log(`Массив "array" - [${array}]`);
console.log(`Наибольший элемент массива - ${maxNumberElementOfArray}`);








