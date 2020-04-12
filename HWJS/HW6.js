

// const PI = 3.14;

// console.log(PI);
// alert('Hello');


// let age = 16; 
// // =16 можно тут не указывать
// age = prompt("your age")
// const grovCondition = age >=18;

// if (grovCondition >=18) {
//     const message = "access permitted"
//     console.log(message);

// }  else{
//     const message = "access denied"
//     console.log(message);
// }



// let counter = 10
// while(counter>= 0){
//     console.log(counter);
//     counter -=2;
// }

// let counter = -1;
// do {
//     counter++;
//     if (counter % 2 != 0)
//         console.log(-counter);
//     else {
//         console.log(counter);
//     }
// } while (counter < 9)

// let counter = -10;
// do {
//     if (counter >= 0) {
//         counter = counter - 9
//         console.log(counter);
//     }
//     else {
//         counter = counter + 10
//         console.log(counter);
//     }
// } while (counter <5)

// for (let counter = -10; counter >=0; counter - 9)
// {
//         console.log(counter);
    // }
//     else {
//         counter = counter + 10
//         console.log(counter);
//     }
// } while (counter <5)



// let word = prompt('Enter the polendrome');

// function pollendrome(word){
//     if(word = word.split('').reverse('').join('')){
//         alert('This is pollendrome');
//     } else {
//         alert ('This is nit pollendrome');
//     }
// }


///////////////////////////////////////
// ПАЛИНДРОМЫ

// let word = шалалаш;

// function palindrom(word){
//     if(word = word.split('').reverse('').join('')){
//         alert('This is a palindrom');
//     } else {
//         alert ('This is not a palindrom');
//     }
// }


// Массив уникальных случайных цифр. Создадим массив для семи элементов;
// Заполним его случайными цифрами от 0 до 10;
// Цифры в массиве не должны повторяться;
// Вывести этот массив в консоль;
// Упорядочить массив;
// Еще раз вывести его в консоль.

// let num = [3, 2, 1, 0, 8, 9, 7, 10, 4, 5];
// console.log(num);
// let sort = (function(a,b){
//     return a-b
// })

// console.log(num.sort(sort))



// Замена элементов массива. Создадим массив с десятью случайными элементами от 0 до 100;
// Напишем инструкцию, которая будет заменять все “0” на строку “zero”;
// Выводим полученный массив в консоль.
// прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

let num = [0, 7, 77, 56, 100, 15, 21, 18, 83, 34];

let num1 = num.join().replace(/0/g, 'zero')
    console.log(num1)