// sort()
// find()
// filter()


// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.filter(el => {
//     return el % 2 === 0
// }))


// let arr1 = [1,2,3,4,5,6,7,8,9]
// console.log(arr1.find(el => {
//     return el % 2 !== 0
// }))


// let arr = [1,2,3,4,5,6,7,22,8,11,16,9,14,10]
// console.log(arr.sort((a,b) => {
//     return a - b
// }))


// let arr = ['Adilet', 'Ruslan']
// console.log(arr.reduce((acc,el,idx) => {
//     return el[0] + acc.slice(1) + ' ' + acc[0] + el.slice(1)
// }))



// 1. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму этих чисел.
// let arr = [5,15,315,2,13,20,9]
// console.log(arr.reduce((acc,el, idx) => {
//     return acc + el
// } , 0))


// 2. Вам дан массив с числами [5,12,314,2,13,20,9].
// Найдите сумму всех четных чисел.
// let arr = [5,12,314,2,13,20,9]
// console.log(arr.filter((el )=> {
//     return el % 2 === 0
// }).reduce((acc,el)=> {
//     return acc + el
// },0))


// 3. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму чисел, которые больше 10.
// let arr = [5,15,315,2,13,20,9]
// console.log(arr.filter((el ) => {
//     return el > 10
// }).reduce((acc, el) => {
//     return acc + el
// }))


// 4. Вам дан массив с числами [3,13,54,15,335, 39].
// Найдите разность чисел, которые больше 10.
// let arr = [3,13,54,15,335, 39]
// console.log(arr.filter( (el => {
//     return el > 10
// })).reduce((acc, el) => {
//     return acc - el
// }))


// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. 
// Сложите все строки и выведите длину результата.
// let str = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str.reduce((acc, el ) => {
//     return acc + el
// }).length)


// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Выведите все строки в верхнем регистре, используя map.
//  let str = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str.map((el) => {
//     return el.toUpperCase()
// }))


// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Выведите все вторые строки в верхнем регистре.
// let str = ['Аскар', 'Баяман', 'Калмамат' , 'Аскат']
// console.log(str.map((el, idx )=> {
//     if ( idx % 2 !== 0) {
//        return el.toUpperCase()
//     }else{
//        return el
//     }
// }))


// 8. Напишите функцию, которая принимает str, target.
// И возвращает true или false, если targer присутствует в str.
// Использовать .reduce для этого.
//     Пример: isPresent ('abcd', 'b') => true
// isPresent ('efghi', 'a') // => false
// function arr (str, target){
// return str.includes(target)
// }
//
// console.log(arr('hd', 'a'))


// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат'].
// Используйте заглавные буквы в каждом массиве имен.
//     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
//  let str = ['асКар', 'бЯяман', 'калМмамат']
// console.log(str.map((el )=>{
//     return el[0].toUpperCase() + el.slice(1).toLowerCase()
// }))


// 10. Вам дан массив со строками ['Баяман', 'Калмамат'].
// Поменяйте местами первые буквы строк.
// let str = ['Баяман', 'Калмамат']
// console.log(str.reduce((acc,el) => {
//     return acc[0] + el.slice(1) + ' ' + el[0] + acc.slice(1)
// }))


// 11. Вам дан массив [true, '1234', 325].
// Напишите функцию, которая проверяет,
// все ли элементы массива относятся к одному типу данных.
// function str (types){
//     return types.reduce((acc, el, idx) => {
//       if (idx !== types.length - 1){
//           return acc && typeof el ===  typeof types[idx + 1]
//       }
//       return acc
//     },true)
// }
//
// console.log(str([true, '1234', 325]))


// 12. Вам дана строка 'тестинг'.
// Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ.
// Если длина слова четная, вернуть 2 средних символа.
// function str(str) {
//     if (str.length % 2 !== 0) {
//         return str[Math.round(str.length / 2)]
//     }else {
//         return str[str.length / 2 - 1] + str[str.length / 2]
//     }
// }
// console.log(str('тестинг'))


// 13. Вам дан массив с числами [5, -3, 13, -7, 45].
// Верните сумму всех положительных чисел.
// let str = [5, -3, 13, -7, 45]
// console.log(str.filter((el) => {
//     return el > 0
// }).reduce((acc,el) => {
//     return acc + el
// }))


// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34].
// Верните сумму всех отрицательных чисел, которые больше 10.
// let str = [5, -54, 13, -7, 45, -15, -34]
// console.log(str.filter((el )=> {
//     return el < 0 && el < -10
// }).reduce((acc,el) => {
//     return acc + el
// }))


// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары.
// Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.
// let str = [1, 65, 13 , 30, 100]
// console.log(str.map((el) => {
//     return el * 87
// }))


// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit'].
// Выведите каждый нечетный индекс в строке в верхнем регистре.
// let str = ['Lorem ipsum dor sit omet devour il ela sit']
// console.log(str.map((el, idx) => {
//     return el.split(' ').map((el,idx)=>{
//         if (idx % 2 === 0) {
//             return el.toUpperCase()
//         }else{
//             return el
//         }
//     }).join(' ')
// }))


// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат'].
// Добавьте к каждой строке нумерацию.
// let str = ['Оскар', 'Баяман', 'Калмамат']
// console.log(str.map((el,idx ) => {
//     return el + idx
// }))


// 18. Вам дан массив с числами [2,456,6,8].
// Напишите функцию , которая вставляет дефис (-) между каждыми двумя четными числами.
// Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.


// 20. Вам дан массив с числами [5,15,315,2,13,20,9].
// Посчитайте среднее арифметическое чисел в массиве.
// let str = [5,15,315,2,13,20,9]
// console.log(str.reduce((acc,el) => {
//     return acc + el / str.length
// }))


//******************************************************************************


// function updateLight(current) {
// if(current === 'green'){
//     return 'yellow'
// }else if(current === 'yellow'){
//     return 'red'
// }else{
//     return 'red'
// }
//     //your code here!
//
// }
//
// console.log(updateLight('green'))



// let filterString = function(value) {
//     //Complete this function :)
//     return value.split()
// }
// console.log(filterString("aa1bb2cc3dd"))


// function sumEvenNumbers(input) {
//    return input.filter(function (el){
//        return el % 2 === 0
//    }).reduce(function (acc,el){
//        return acc + el
//    })
// }
//
// console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,10]))


