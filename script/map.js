
// map(), filter()


// let arr = [2, 4, 6, 8, 10]
// console.log(arr.map(function (el,idx,array){
//     return el + 2
//     return > 6
// }))


// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// let arr = [315, 64, 75, 43, 65, 63]
// console.log(arr.map(el => {
//     return el + el
// }))


// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
// Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// let arr = ['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.map(el => {
//     return el.toUpperCase().replaceAll('А', 'Я')
// } ))


// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
// Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.
// let arr = ['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.filter(el => {
//     return el.toLowerCase().includes('к')
// }))


// 4. Вам дан массив: [4, 54, 49].
// Сделайте из него массив, состоящий из квадратов этих чисел.
// let arr = [4, 54, 49]
// console.log(arr.map(el => {
//     return el ** 2
// }))


// 5. Вам дан массив [3134, 4, -143, -245, -214].
// Оставьте в нем только отрицательные числа.
// let arr = [3134, 4, -143, -245, -214]
// console.log(arr.filter(el => {
//     return el % 2 !== 0
// }))


// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let arr = [3, 51, 30, 54, 60]
// console.log(arr.filter(el => {
//     return el % 2 === 0
// } ))


// 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат'].
// Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let arr = ['Бегимай', 'Баяман', 'Калмамат']
// console.log(arr.filter(el => {
//     return el.length > 5
// }))


// 8. Вам дан массив [-13, 96, -41, -28, 40].
// Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [-13, 96, -41, -28, 40]
// console.log(arr.filter(el => {
//     return el < 0
// }).length)


// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let arr = [3, 51, -30, -54, 60]
// console.log(arr.filter(el => {
//     return el > 30
// }))


// 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.
// let arr = [55, 44, 55, 44, 15, 49]
// console.log(arr.filter(el => {
//     return arr.indexOf(el) === arr.lastIndexOf(el)
// }))


// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null].
// Создайте функцию, которая очищает массив от ложных (false) значений:
// false, null, undefined, 0, –0, NaN и "" (пустая строка).
// let arr = [NaN, 0, 77, false, -17, '',undefined, 99, null]
// console.log(arr.filter(el => {
//     return el
// }))


// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
// let arr = ['Бегимай', 'Баяман', 'Калмамат']
// console.log(arr.map(el => {
//     return el.length
// }))


// **************************************************************************


// filter()

// filter()
// let arr = ['Ivan', 'Jon', 'Tom', 'Jake', 'Askar']
// console.log(arr.filter(function (el){
//     return el.length > 4
// }).map(function (element){
//     return element.replace('A','O')
// }))

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter(function (el){
//     return el % 2 !== 0
//     return el % 2 === 0
// }))

// let arr = [false,NaN,null,0 ,'',1,-1,'motion']
// console.log(arr.filter(el => {
//     return el
// }   ))