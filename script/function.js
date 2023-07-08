// function

// function declaration

// console.log(myFunc(2, 6))
// function myFunc(a, b) {
//    if (a > b){
//        return true
//    }else {
//        return false
//    }
// }
//
// console.log(myFunc(1, 5))


// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.

// function myFunc(a){
//    if (a === 10){
//        return 'Верно'
//    }else {
//        return 'Неверно'
//    }
// }
//
// console.log(myFunc(10))


// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// function myFunc (a, b){
//    if (a > b){
//        return 'a больше b'
//    }else{
//        return  'a меньше b'
//    }
// }
//
// console.log(myFunc(50, 100))


// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

// function task(a){
//    if (a > 0){
//        return 'positive'
//    } else  if ( a === 0){
//        return 'равно'
//    }else {
//        return  'negative'
//    }
// }
//
// console.log(task(-2))

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// function task2(number) {
//    if (number % 2 === 0) {
//        return "Четное число"
//    }else {
//        return "Нечетное число"
//    }
// }
//
// console.log(task2(46))


// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".


// function motion(a, b) {
//     let result = a / b
//     if (result % 2 === 0){
//         return "Четное число"
//     }else {
//         return "Нечетное число"
//     }
// }
//
//  console.log(motion(10, 2))


// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// function myFunc(s) {
//     if (typeof s === "string") {
//         return 'string'
//     } else  if ( typeof s === "number") {
//         return "number"
//     } else{
//         return "boolean"
//     }
// }
//
//  console.log(myFunc(10))


// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// function myFunc(a) {
//     if (a > 1 && a < 9) {
//         return 'Верно'
//     }else {
//         return 'Неверно'
//     }
// }
//
//  console.log(myFunc(10))


// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// function task3(a){
//    if (a === 3 || a === 7){
//        return a + 7
//    }else {
//        return a / 10
//    }
// }
//
// console.log(task3(3))


// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// function myFunc(a,b) {
//     if (a <= 0 && b >= 5){
//         return a + b
//     }else {
//         return a - b
//     }
// }
//
//  console.log(myFunc(7,7))


// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// function myFunc(a, b){
//     if (a > 4 && a < 10 || b >= 7 && b < 17){
//         return 'Верно'
//     }else   {
//         return 'Неверно'
//     }
// }
//
//  console.log(myFunc(11, 18))

// ************************************************************************

// arrow function

// const myFunction = (a, b) => {
//    if (a > b){
//        return true
//    }else {
//        return false
//    }
// }
// console.log(myFunction(1,4))


// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.

// let showMessage = (a) => {
//    if (a === 10){
//        return 'Верно'
//    }else {
//        return 'Неверно'
//    }
// }
// console.log(showMessage(10))


// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// let myFunc = (a, b) => {
//     if (a > b) {
//         return 'a больше b'
//     } else {
//   return 'a меньше b'
//     }
// }
// console.log(myFunc(50, 100))

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

// let showMessage = (a) => {
//     if (a > 0) {
//         return 'positive'
//     }else if (a === 0){
//         return 'равно'
//     } else {
//         return 'negative'
//     }
// }
// console.log(showMessage(-2))

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let showMessage = (number) => {
//     if (number % 2 === 0){
//         return "Четное число"
//     }else {
//         return "Нечетное число"
//     }
// }
// console.log(showMessage(45))


// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// let myFunc = (a, b) => {
//     let result = a / b
//     if (result % 2 === 0){
//         return "Четное число"
//     }else {
//        return "Нечетное число"
//     }
// }
//
// console.log(myFunc(10, 2))


// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let showMessage = (s) => {
//     if (typeof  s === "string"){
//         return 'string'
//     }else if (typeof s === "number"){
//         return "number"
//     }else {
//         return  "boolean"
//     }
// }
// console.log(showMessage(23))


// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// let myFunction = (a) => {
//     if (a > 1 && a < 9 ){
//         return 'Верно'
//     }else {
//         return  'Неверно'
//     }
// }
// console.log(myFunction(2))


// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// let showMessage = (a) => {
//     if (a === 3 || a === 7){
//         return a + 7
//     }else {
//         return a / 10
//     }
// }
// console.log(showMessage(7))


// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// let showMessage = (a, b) => {
//     if (a <= 0 && b >= 5){
//         return a + b
//     }else {
//         return a - b
//     }
// }
// console.log(showMessage(3,5))


// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let myFunc = (a, b) => {
//     if (a > 4 && a < 10 || b >= 7 && b < 17){
//         return 'Верно'
//     }else {
//         return 'Неверно'
//     }
// }
// console.log(myFunc(5, 10))


// **********************************************************************************


// function expression

// let myFunc = function (a,d){
//
// }
// console.log(myFunc(2,3))


// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.

// let showMessage = function (a) {
//     if (a === 10){
//         return 'Верно'
//     }else {
//         return 'Неверно'
//     }
// }
// console.log(showMessage(15))


// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// let showMessage = function (a, b){
//     if (a > b){
//         return 'a больше b'
//     }else {
//         return 'a меньше b'
//     }
// }
// console.log(showMessage(50, 100))


// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

// let showMessage = function (a) {
//     if (a > 0 ){
//         return 'positive'
//     }else if (a === 0) {
//         return 'равно'
//     }else {
//         return  'negative'
//     }
// }
// console.log(showMessage(0))


// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let showMessage = function (number){
//     if (number % 2 === 0){
//         return "Четное число"
//     }else {
//         return "Нечетное число"
//     }
// }
// console.log(showMessage(2))


// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// let showMessage = function (a, b) {
//     let result = a/ b
//     if (result % 2 === 0) {
//         return  "Четное число"
//     }else {
//         return "Нечетное число"
//     }
// }
// console.log(showMessage(2, 1))


// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let showMessage = function (s) {
//     if (typeof s === "string"){
//         return "string"
//     }else if (typeof s === "number"){
//         return "number"
//     }else {
//         return "boolean"
//     }
// }
// console.log(showMessage(""))


// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// let showMessage = function (a) {
//     if (a > 1 && a < 9){
//         return 'Верно'
//     }else {
//         return  'Неверно'
//     }
// }
// console.log(showMessage(11))


// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// let showMessage = function (a) {
//     if ( a === 3 || a === 7 ){
//         return a + 7
//     }else {
//         return a / 10
//     }
// }
// console.log(showMessage(3))


// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// let showMessage = function ( a , b){
//     if (a <= 0 && b >= 5){
//         return a + b
//     }else{
//         return a - b
//     }
// }
// console.log(showMessage(4, 3))


// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let showMessage = function (a, b){
//     if (a > 4 && a < 10 || b >= 7 && b < 17){
//         return 'Верно'
//     }else {
//         return 'Неверно'
//     }
// }
// console.log(showMessage(5, 17))


function myFunc (mouth) {
    if (mouth >= 1 && mouth <= 2 || mouth === 12) {
        return 'кыш'
    } else if (mouth > 2 && mouth < 6) {
        return 'жаз'
    } else if (mouth > 5 && mouth < 9) {
        return 'жай'
    } else if (mouth > 8 && mouth < 12) {
        return 'куз'
    } else {
        return 'мындай мезгил жок!'
    }
}

console.log(myFunc(3))