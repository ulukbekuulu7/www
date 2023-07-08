// if else...

// 1. Вам дана переменная a.
// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 10
// if (a === 10) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }


// 2. Вам даны две переменные a=50, b=100.
// Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// let a = 50
// let b = 100
// if (a > b) {
//     console.log('a больше b')
// } else {
//     console.log('a меньше b')
// }


// 3. Вам дана переменная a=-2.Составьте условие,
// по которому в консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// let a = -2
// if (a > 0){
//     console.log('positive')
// }else if (a === 0 ){
//     console.log('равно')
// }else{
//     console.log("negative")
// }


// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число",. "Нечетное число"
// let number = 45
// if ( number % 2 === 0){
//     console.log("Четное число")
// }else  {
//     console.log( "Нечетное число")
// }


// 5. Вам даны две переменные a=10, b=2.
// Составьте условие, по которому, остаток деления a на b,
// будет выводиться консоль "Четное число", "Нечетное число".
// let a = 10
// let b = 2
// let result = a / b
// if (result % 2 === 0){
//     console.log("Четное число")
// }else  {
//     console.log("Нечетное число")
// }

// 6. Вам дана переменная s.
// Составьте условие, по которому в консоль будет выводится тип этой переменной
// - "boolean", "number", "string".
// let s = 12
//  if (typeof  s === "string"){
//      console.log('string')
//  }else if (typeof s === "number"){
//      console.log("number")
//  }else {
//      console.log("boolean")
//  }


// let s = prompt()
// if (s === 'red') {
//     console.log("токто")
// } else if (s === "yellow") {
//     console.log("даярдан")
// } else if (s === "green") {
//     console.log("отобер")
// } else {
//     console.log("туура эмес")
// }


// let num = ''
// console.log(num.length)


// let a = 2345643
// if (a > 0){
//     return
// }


// function

// function logo (str) {
//     if (str > 0) {
//         console.log('число положительный')
//     } else if (str < 0) {
//         console.log('число отрицательное')
//     } else if(str === 0) {
//         console.log('число равно нуля')
//
//     }
// }
//
// logo(8)


// let logo = function (str){
//     if (str > 0) {
//         console.log('число положительный')
//     } else if (str < 0) {
//         console.log('число отрицательное')
//     } else if(str === 0) {
//         console.log('число равно нуля')
//
//     }
// }
// logo(8)


// function  task9 (a,b){
//     if (a > 4 && a < 10 || b >= 7 && b < 17){
//         console.log('верно')
//     } else {
//         console.log('неверно')
//     }
// }
//
// task9(20,10)


// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет
// выводится тип этой переменной - "boolean", "number", "string".

// function check(s){
//     console.log(typeof s)
// }
// check(4)


// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти,
// то выведите 'Верно', иначе выведите 'Неверно'.
// let task7 = function (a) {
//     if (a > 1 && a < 9){
//         console.log('Верно')
//     }else {
//         console.log('Неверно')
//     }
// }
// task7(8)


// 8. Вам дана переменная а. Если переменная a равна трем или равна семи,
// то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение
// переменной в консоль.
// let task8 = function (a) {
//     if ( a === 3 || a === 7 ){
//         console.log(a + 7)
//     }else {
//         console.log( a / 10)
//     }
// }
// task8(3)


// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0,
// а переменная b больше или равна 5, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания).
// let task9 = function ( a , b){
//     if (a <= 0 && b >= 5){
//         console.log(a + b )
//     }else{
//         console.log(a - b)
//     }
// }
//  task9(4, 3)


// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'.
// let task10  = function (a, b){
//     if (a > 4 && a < 10 || b >= 7 && b < 17){
//         console.log('Верно')
//     }else {
//         console.log('Неверно')
//     }
// }
// task10 (5, 17)


// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'.
// Выведите значение этой переменной в консоль.
// let func = (str) => {
//     return str
// }
// console.log(func('Привет, Мир!'))


// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'.
// С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
// let func = function (str1,str2){
//     return str1 + str2
// }
// console.log(func('Привет, ' , 'Мир!'))


// 3. Вам дана переменная name, присвойте ей ваше имя.
// Выведите в консоль фразу 'Привет, *Имя*!'.
// let func = (name) => {
// return `привет ${name}`
// }
// console.log(func('Аскар'))


// 4. Вам дана переменная age , присвойте ей ваш возраст.
// Выведите в консоль 'Мне *Возраст* лет!'.
// let func = (age) => {
//     return `мне ${age} лет!`
// }
// console.log(func(17))


// 5. Вам даны четыре переменные.
//     Первая - для хранения количества дней. Присвойте ей значение "365".
//     Вторая - для хранения названия нашей планеты "Земля".
//     Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
//     Четвертая - для хранения слова "Солнце".
//     Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
//     "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."
// let func = (a, b, c, d) => {
// return `В нашем году ${a} Днём у нас светит ${d}  Население планеты ${b} составляет примерно ${c} человек. `
// }
// console.log(func('365','земля', '7 млрд.', ' "Солнце"' ))


// 1. Вам дана переменная str = 'Nevis ITDB TECH'.
// Выведите в консоль длину первого слова.
// let func = (str) => {
//     return str.slice(0,5).length
// }
// console.log(func('Nevis ITDB TECH'))


// 2. Вам дана переменная str = 'Максимально УЖАСНО'.
// Выведите в консоль слово УЖАСНО, только нижним регистром.
// let func2 = (str3) => {
//     return str3.slice(12).toLowerCase()
// }
// console.log(func2('Максимально УЖАСНО'))


// 3. Вам дана переменная str ='Максимально УЖАСНО''.
// Выведите в консоль слово максимально, только верхним регистром.
// let func3 = (str) => {
//     return str.slice(0,11).toUpperCase()
// }
// console.log(func3('Максимально УЖАСНО'))


// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально
// Ужасно', используя метод slice.
// let func6 = (str) => {
//     return str.slice(5)
// }
// console.log(func6('Максимально Ужасно'))


// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У,
// использую метод charAt.
// let func7 = (str) => {
//     return str.charAt(12)
// }
// console.log(func7('Максимально Ужасно'))


// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в
// консоль соединенные строки, используя метод concat.
// let func8 = (str1,str2) => {
//     return str1.concat(str2)
// }
// console.log(func8('Максимально ','Ужасно'))


// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите
// в консоль индекс слова 'Ужасно'.
// function func9(str) {
//     return str.slice(12,18).length
// }

// console.log(func9('Максимально Ужасно'))


// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более
// 1 раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// function func10(str) {
//
// }
//
// console.log(func10('Максимально Ужасно'))


// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в
// консоль первую букву каждого слова строки в верхний регистр.
// let func11 = (arr) => {
//     return arr[0].toUpperCase() + arr.slice(1,12).toLowerCase() + arr[12].toUpperCase() + arr.slice(13).toLowerCase()
// }
// console.log(func11('макСИМАЛЬНО ужаСНО'))


// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль
// индекс первого вхождения буквы а.
// function func12(str) {
//     return str.indexOf('а')
// }
//
// console.log(func12('Максимально Ужасно'))


// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в
// консоль индекс первого последнего буквы о.
// let func = (arr) => {
//     return arr.lastIndexOf('о')
// }
// console.log(func('Максимально Ужасно'))


// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя
// разными способами (через substr, substring, slice) и выведите в консоль.
// let func14 = (str) => {
//     // return str.slice(4,7)
//     return str.substring(4,8)
//     return str.substr(4,3)

// console.log(func14('aaa bbb ccc'))


// 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату
// в формат '31/12/2025' и выведите в консоль.
// let func15 = (str) => {
//     return str.replace(/-/g, '/')
// }
// console.log(func15('17-02-2021'))


// 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в"
// в данной строке, если да, то выведите "Да", иначе - "нет".
// function func16(str) {
//     if ( str.includes('в')){
//         return "Да"
//     } else {
//         return "нет"
//     }
// }
//
// console.log(func16('Максимально Ужасно'))


// 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая
// буква в строке совпадает с
// последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".
// let func17 = (str) => {
//     return str[0] !== str[str.length - 1] ? "Не совпадает" : "Совпадает";
// }
// console.log(func17('АаааааА'))


// 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в
// первой половине строки, или последней. Если в первой, то выведите в консоль -
// "В первой половине", иначе - "Во второй половине".
//  let func18 = (str) => {
//     if (str.indexOf('л') > str.length / 2){
//         return "Вo второй половине"
//     } else{
//         return "В первой  половине"
//     }
//  }
// console.log(func18('Максимально'))


// array

// fill() -> бирганча элементти массивдин ичине  толтуруп берет


// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let str = ['a', 'b', 'c']
// str.push(1,2,3)
// console.log(str)

// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let str = [1,2,3]
// let str2 = [4, 5, 6]
// console.log(str.concat(str2))

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let str =  [1, 2, 3]
// str.push(4,5,6)
// console.log(str)

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let str = [1, 2, 3]
// str.unshift(4,5,6)
// console.log(str)

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq']
// arr.splice(1,2)
// console.log(arr)

// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq']
// arr.splice(1,2)
// console.log(arr)

// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(0,3))

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(3,5))

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1,2)
// arr.splice(0,3,1)
// console.log(arr)

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(0,5,2,3,4)
// console.log(arr.splice(1,3))

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(3,0,'a', 'b', 'c')
// console.log(arr)

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1,0, 'a', 'b')
// arr.splice(6,0,'c')
// arr.splice(8,0,'e')
// console.log(arr)

// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let str = [3, 4, 1, 2, 7]
// console.log(str.sort((el,idx) => {
//     return el
// }))


// 14 биринчи элемент кайтарып берет
// let arr = [1,2,3,4,5,6,7,8,9];
// function getFirst(array) {
// return array.shift()
// return array[0]


// console.log(getFirst(arr))

// 15 акыркы элемент кайтарып берет
//  array = [1,2,3,4,5,6,7,8,9];


// sort() , filter(), map()

// function sortEl(arr) {
//     return arr.sort(function (a, b) {
//         return a - b
//     })
//
// }
//
// console.log(sortEl([80,38,47,65,10,20,54]))

// function filtEr(arr) {
//     return arr.filter(function (el,idx) {
//         return arr.includes('b')
//     })
// }
//
// console.log(filtEr(['blue','black', 'green','yellow', 'purple']))

// let arr = new Array(50).fill(0)
//
// console.log(arr.map(function (el,idx){
//     return idx + 1
// }))


// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.

// let str = [315, 64, 75, 43, 65, 63]
// console.log(str.reduce(function (acc,el,idx){
//     return acc + el
// },0))


// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
// Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.

// let str = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str.map(function (el,idx){
//     return el.toLowerCase().replaceAll('а', 'я')
// }))

// console.log(str.map((el, idx) =>{
//     return el.split(" ").map(item => {
//         // return el.toLowerCase().replaceAll('а', 'я')
//         if (item.toLowerCase() === 'а'){
//             return 'я'
//         }else{
//             return item
//         }
//     }).join()
// }))

// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
// Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.

// let str = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str.filter(function (el,idx){
//     return el.toLowerCase().includes('к')
// }))


// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив,
// состоящий из квадратов этих чисел.

// let str = [4, 54, 49]
// console.log(str.map(function (el,idx) {
//     return el ** 2
// }))


// 5. Вам дан массив [3134, 4, -143, -245, -214].
// Оставьте в нем только отрицательные числа.

// let str = [3134, 4, -143, -245, -214]
// console.log(str.filter(function (el,idx){
//   return el < 0
// }))


// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте
// в нем только четные числа.

//  let str = [3, 51, 30, 54, 60]
// console.log(str.filter(function (el,idx){
//   return el % 2 === 0
// }))


// 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат'].
// Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let str = ['Бегимай', 'Баяман', 'Соня','Калмамат','Аза']
// console.log(str.filter((el, idx) => {
//     return el.length > 5
// }))


// 8. Вам дан массив [-13, 96, -41, -28, 40].
// Посчитайте количество отрицательных чисел в этом массиве.

// let str = [-13, 96, -41, -28, 40]
// console.log(str.filter((el, idx) => {
//     return el < 0
// }).length )


// 9. Вам дан массив [3, 51, -30, -54, 60].
// Оставьте в нем только положительные числа. Затем
// извлеките квадратный корень из этих чисел, если эти числа больше 30.

// let str = [33, 51, -30, -54, 60]
// console.log(str.filter((el, idx) => {
//     return el > 0
// }).map(el =>{
//     return Math.sqrt(el)
// }))


// 10. Вам дан массив [55, 44, 55, 44, 15, 49].
// Оставьте в нем только неповторяющиеся числа.

// let str = [55, 44, 55, 44, 15, 49]
// console.log(str.filter((el,idx)=> {
//     return str.indexOf(el) === str.lastIndexOf(el)
// }))


// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null].
// Создайте функцию, которая очищает массив от ложных (false) значений:
// false, null, undefined, 0, –0, NaN и "" (пустая строка).

// let str = [NaN, 0, 77, false, -17, '',undefined, 99, null]
// console.log(str.filter((el,idx) => {
//     return el
// }))


// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

// let str = ['Бегимай', 'Баяман', 'Калмамат']
// console.log(str.map((el,idx) => {
//     return el.length
// }))


// reduce() => озуно 2 жана 4 параметр кабыл алат.   2 (колбек =>) жана (инишлвалуе ,0)


// Во всех задачах используйте только методы map, reduce.
// 1. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму этих чисел.
// function myFunc(arr) {
//     return arr.reduce((acc,el) =>{
//         return acc + el
//     },0)
// }
// console.log(myFunc([5,15,315,2,13,20,9]))


// 2. Вам дан массив с числами [5,12,314,2,13,20,9].
//Найдите сумму всех четных чисел.
// let myFunc = (arr) =>{
//     return arr.filter(el => {
//         return el % 2 === 0
//     })
// }
// console.log(myFunc([5,12,314,2,13,20,9]).reduce((acc,el) => {
//     return acc + el
// },0))


// 3. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму чисел, которые больше 10.
// let myFunc = (arr) => {
//     return arr.filter(el => {
//         return el > 10
//     })

//     return arr.reduce((acc,el,idx) => {
//         if (el > 10){
//             return acc + el
//         }else {
//             return acc
//         }
//     },0)

// }

// console.log(myFunc([5,15,315,2,13,20,9]))

// console.log(myFunc([5,15,315,2,13,20,9]).reduce((acc,el) => {
//     return acc + el
// },0))


// 4. Вам дан массив с числами [3,13,54,15,335, 39].
// Найдите разность чисел, которые больше 10.
// function myFunc(arr){
//     return arr.filter(el => {
//         return el > 10
//     }).sort((a,b) => {
//         return b - a
//     }).reduce((acc, el ) => {
//         return acc - el
//     })
// }
// console.log(myFunc([3,13,54,15,335, 39]))


// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Сложите все строки и выведите длину результата.
// let  myFunc = function (arr){
//     return arr.reduce((acc,el) => {
//         return acc + el
//     }).length
// }
// console.log(myFunc(['Аскар', 'Баяман', 'Калмамат']))


// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Выведите все строки в верхнем регистре, используя map.
// let myFunc = function (arr){
//     return arr.map(el => el.toUpperCase)
// }
// console.log(myFunc(['Аскар', 'Баяман', 'Калмамат']))


// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Выведите все вторые строки в верхнем регистре.
// let myFunc = (arr) => {
//     return arr.map((el,idx)=> {
//         if (idx % 2 === 0){
//             return el.toLowerCase()
//         }else{
//             return el
//         }
//         return  idx % 2 !== 0 ? el.toUpperCase() : el
//     })
// }
// console.log(myFunc(['Аскар', 'Баяман', 'Калмамат']))


// 8. Напишите функцию, которая принимает str, target.
// И возвращает true или false, если targer присутствует в str. Использовать .reduce для этого.
//     Пример: isPresent ('abcd', 'b') => true
// isPresent ('efghi', 'a') // => false
// let myFunc = (a,b) => {
//     return  a.split("").reduce((acc,el) => {
// return a.includes(b)
// if (el === b){
//     return true
// }else{
//     return acc
// }
// },false)
// }
// console.log(myFunc('motion','m'))


// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат'].
// Используйте заглавные буквы в каждом массиве имен.
//     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
// console.log(['асКар', 'бЯяман', 'калМмамат'].map(el=>{
//     return el[0].toUpperCase() + el.slice(1).toLowerCase()
//
// }))
//     function task9(arr) {
//         return arr.reduce((acc,el)=> {
//             let res = el.slice(0,1).toUpperCase()
//             let res1 = el.slice(1).toLowerCase()
//             // return res + res1
//             acc.push(res + res1)
//             return acc
//         },[])
//     }
//
// console.log(task9(['асКар', 'бЯяман', 'калМмамат']))


// 10. Вам дан массив со строками ['Баяман', 'Калмамат'].
// Поменяйте местами первые буквы строк.
// let myFunc = (arr) => {
//     return  arr.reduce((acc, el, idx) => {
//         return acc[0] + el.slice(1) + " " + el[0] + acc.slice(1)
//     })
// }
// console.log(myFunc(['Баяман', 'Калмамат']))


// 11. Вам дан массив [true, '1234', 325].
// Напишите функцию, которая проверяет,
// все ли элементы массива относятся к одному типу данных.
// let myFunc = function (arr) {
//     return typeof arr
// }
// console.log(myFunc([true, '1234', 325]))


// 12. Вам дана строка 'тестинг'.
// Ваша задача - вернуть средний символ слова. Если длина слова нечетная
// верните средний символ. Если длина слова четная, вернуть 2 средних символа.

// function myFunc (str) {
//     if (str.length % 2 !== 0) {
//         return str[Math.round(str.length / 2)]
//     }else {
//         return str[str.length / 2 - 1] + str[str.length / 2]
//     }
// }
// console.log(myFunc('теcтинг'))


// 13. Вам дан массив с числами [5, -3, 13, -7, 45].
// Верните сумму всех положительных чисел.
// let func = (arr) => {
//     return arr.filter(el => {
//         return el > 0
//     }).reduce((acc,el,idx) => {
//         return acc + el
//     },0)
// }
// console.log(func([5, -3, 13, -7, 45]))


// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34].
// Верните сумму всех отрицательных чисел, которые больше 10.
// let myFunc = function (arr){
// return arr.filter(el => {
//     return el < -10
// }).reduce((acc,el,idx) => {
//     return acc + el
// },0)
//     return arr.reduce((acc,el) =>{
//         if (el < -10){
//             return acc + el
//         }else{
//             return acc
//         }
//     },0)
// }
// console.log(myFunc([5, -54, 13, -7, 45, -15, -34]))


// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары.
// Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.
// let myFunc = (arr) => {
//     return arr.map((el,idx) => {
//         return el * 89
//     })
// }
// console.log(myFunc([1, 65, 13 , 30, 100]))


// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit'].
// Выведите каждый нечетный индекс в строке в верхнем регистре.
// let myFunc = (arr) => {
// return arr.map(el=>{
//     return el.split(" ").map((el,idx) => {
//         if (idx % 2 === 0){
//             return el.toUpperCase()
//         }else{
//             return  el
//         }
//     }).join(" ")
// })
// return arr.map((el,idx) => {
//     return el.split(" ").map((el, idx)=>{
//         if (idx % 2 === 0){
//             return el.toUpperCase()
//         }else{
//             return el
//         }
//     }).join(' ')
// })
//     return arr.reduce((acc,el) => {
//         return
//     })
// }
// console.log(myFunc(['Lorem ipsum dor sit omet devour il ela sit']))


// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат'].
// Добавьте к каждой строке нумерацию.
// let str = [' Оскар', ' Баяман', ' Калмамат']
// console.log(str.map((el,idx) => {
// return idx + el
//     return ` ${idx + 1}. ${el} `
// }))}


// 18. Вам дан массив с числами [2,456,6,8].
// Напишите функцию , которая вставляет дефис (-) между каждыми двумя четными числами.
// Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.
// const myFunc =(str) => {
//     let resalt = ''
//     let newArray = str.join('').split("")
//     newArray.map((el,idx)=>{
//         if (el % 2 === 0 && newArray[idx + 1] % 2 === 0) {
//             resalt += el + '-'
//         }else{
//             resalt += el
//         }
//     })
//     return resalt


//     return str.reduce((acc,el ,idx) => {
//         if (str[idx] % 2 === 0 && str[idx + 1 ] % 2 === 0){
//         return acc + el + '-'
//         }else {
//             return acc + el
//         }
//     },'')
// }
// console.log(myFunc([2,456,6,8]))


// let str = [0, 1, 0, 1, 0, 1, 0, 1]
// console.log(str.sort((a,b) =>{
//     return a - b
// }))

// let func = (str) => {
//     return
// }
// console.log(func([0, 1, 0, 1, 0, 1, 0, 1]))


// let str = ["x","a","t","w","l"]
// console.log(str.sort((a,b)=>{
//     return a.localeCompare(b)
// }))


// function getRandomInt(max) {
// let str.Math.floor(Math.random() * max.length);
// }
//
// console.log(getRandomInt(["Aichurok","Aikokul","Timur","Alberidin","Argen","Nurgazy","Janyl eje","Makhabat eje","Janatan","Rahat baike","Timur baike","Bolot"]))


// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let func =(obj) => {
//     return Object.keys(obj).length
// }
// console.log(func({a: 1, b: 2, c: 3}))

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}.
//     Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// function func (obj) {
// return obj.c,
//     obj["c"]
// }

// console.log(func( {a: 1, b: 2, c: 3}))

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// Выведите на экран зарплату Атая и Ширин.
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// console.log(obj.Атай,obj.Ширин)

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
//     Измените зарплату Атая на 500.
// let func = (obj) => {
//     obj.Атай = "500"
//     return obj
// }
// console.log(func({Ширин: '1000', Айжан:'500', Атай: '200'}))

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
//     Добавьте к объекту ключ Медет со значением 1500.
// function func(obj){
//     obj.Медет = '1500'
//     return obj
// }
//
// console.table(func({Ширин: '1000', Айжан:'500', Атай: '200'}))

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//         Выведите значение ключа salary в консоль.
// let func = function (obj){
//     return obj.Атай.salary
// }
// console.log(func({Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}))

// 7. Создайте объект с днями недели.
//     Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.).
// Выведите на экран текущий день недели.
// const func = (obj) => {
//    return obj.вторник
// }
// console.log(func({понедельник: '1', вторник: '2', среда: '3', четверг: '4', пятница: '5', субота: '6', воскресеньие: '7'}))

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// Выведите день недели, соответствующий значению переменной day.
// let func = function (obj){
//     return obj
// }
// console.log(func({1:"понедельник", 2:"вторник", 3:"среда", 4:"четверг", 5:"пятница", 6:"субота", 7:"воскресеньие"}))

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//         Получите все ключи объекта.
// let func = (obj) => {
//     return Object.keys(obj)
// }
// console.log(func({Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}))

// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// let obj1 = Object.keys(obj)
// let obj2 = Object.keys(obj.Атай)
// console.log([...obj1,...obj2])

// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//         Получите все значения объекта.
// function func (obj){
//     return Object.values(obj)
// }
//
// console.log(func({Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}))

// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// // Object.keys(obj)
//  let obj1 = Object.values(obj).slice(0,2)
//  let obj2 = Object.values(obj.Атай)
// console.log(...obj1,...obj2)


// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//         Выведите все entries объекта.
// let func = function (obj){
//     return Object.entries(obj)
// }
// console.log(func( {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}))

// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Выведите 1, если длина ключа name нечетная, 0 если четная.
// let obj = {name: 'Igor'}
//  function func(obj) {
//     if (obj.name.length % 2 === 0){
//         return '0'
//     }else {
//         return '1'
//     }
//  }
//
//  console.log(func(obj))

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ].
//     Выведите все id в консоль через map.
// let func = (obj) => {
//     return obj.map(el => {
//         return el.id
//     })
// }
// console.log(func([ {id: 3}, {id: 5}, {id: 6}, {id: 7}]))

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Добавьте новый ключ age со значением
// let func = function (obj){
//    obj.age = '15'
//     return obj
// }
// console.log(func({name: 'Igor'}))

// function tack (obj){
//     obj.age = 25
//     console.log(obj)
// }
// const user ={name:'Igor'}
// tack(user)


// increment +1
// increment -1
// n++


// for (let i = 0; i < 101; i+=2){
//     console.log(i)
// }


// let even = []
// let odd = []
// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//        even.push(i)
//     }else{
//         odd.push(i)
//     }
// }
// console.log(even)
// console.log(odd)


// 1. Выведите столбец чисел от 1 до 50.
// for ( let i = 1; i <= 50; i++){
//     console.log(i)
// }

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// let arr = []
// for (let i = 0; i < 10; i++){
//     arr.push('x')
// }
// console.log(arr)

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7].
// С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7]
// for (let i = 0; i < arr.length; i++ ){
//     console.log(arr)
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2].
// С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2]
// let str = 0
// for (let i = 0; i < arr.length; i++){
//     str += arr[i]
// }
// console.log(str)

// function func(arr) {
//     let str = 1
//     for (let i = 0; i < arr.length; i++) {
//         str *= arr[i]
//     }
//     return str
// }
//
// console.log(func([5, 2, 1, 2]))

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i <= 100; i += 2){
//     console.log(i)
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
//  for(let i = 0; i <= 100; i++){
//      console.log(i + i)
// }

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8].
// С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let str = [2, 4, 5, 6, 8]
// let res = 1
// for (let i = 0; i < str.length; i++){
//     res += str[i]
// }
// console.log(res)

// function func(str) {
//     let res = 0
//     for (let i = 0; i < str.length; i++) {
//         res += str[i]
//     }
//     return res
// }
//
// console.log(func([2, 4, 5, 6, 8]))

// 8. Вам дан массив [3, 4, 6, 12, 3, 5].
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr =  [3, 4, 6, 12, 3, 5]
// for ( let i = 0; i <= arr.length; i++){
//     if (arr[i] > 3 && arr[i] < 10 ){
//         console.log(arr[i])
//     }
// }

// function func(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] > 3 && arr[i] < 10) {
//             console.log(arr[i] )
//         }
//     }
//     return
// }
//
// console.log(func([3, 4, 6, 12, 3, 5]))
// 9. Вам дан массив с числами.
// Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// let str = [ 5, -5, 9, -7, 2, -3, -2]
// let res = 0
// for (let i = 0; i < str.length; i++){
//     if ( str[i] > 0 ){
//        res += str[i]
//     }
// }
// console.log(res)


// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20].
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 4, 6, 15, 3, 20]
// for ( i = 0; i < arr.length; i++){
// if (arr[i] === 4){
//     console.log('Есть!')
// }
// arr[i] === 4 ? console.log('Есть!') : false
// }

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000]
// for (let i = 0; i < arr.length; i++){
//     let index = + arr[i].toString()[0]
//         if (index === 1 || index === 2 || index === 5){
//             console.log(arr[i])
//         }
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9].
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let str = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = ''
// for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) !== str.length - 1) {
//         res += `-${str[i]}`
//     } else {
//         res += `-${str[i]}-`
//     }
// }
// console.log(res)

// 13. Вам дано число n=1000. Делите его на 2 столько раз,
// пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let n = 1000
// let str = 0
// while (n > 50){
//     console.log(n)
//     n /= 2
//     str++
// }
// console.log(str)

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9].
// Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// function func(arr){
//     let i = 0
//     let sum = 0
//     while ( i < arr.length){
//         sum += arr[i]
//         i++
//     }
//    return sum / arr.length
//         }
//
// console.log(func( [1, 2, 3, 7, 6, 9]))

// 15. Вам дан массив с числами [1, 2, 3, 4, 5].
// С помощью цикла найдите сумму квадратов элементов этого массива.
// let str =  [1, 2, 3, 4, 5]
// let res = 0
// for (let i = 0; i < str.length; i++){
// res = str[i]*str[i]
// }
// console.log(res)


//      for (let i = 0; i < str.length; i++){
//          console.log(str.reduce((acc,el) =>{
//              return el ** 2 + acc
//          }))
// }


// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] < 10){
//         console.log(arr[i])
//     }
// }


// 17. Создайте переменную с пустым массивом,
// заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// let arr = []
// for (let i = 0; i < 10; i++){
//     arr[i] = Math.round(Math.random() * 10)
// }
// console.log(arr)


// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// for (let i = 0;  i < 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i)
//     }
// }

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.
// let str = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0; str.length; i++){
//     if (str[i] > 10 && str[i] % 2 !== 0){
//         console.log(str[i])
//     }
// }


// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.

// let str = 'jzvzszrzpz'
// let newStr = str.split("")
// for (let i = 0;i < newStr.length; i++){
//       if ( i % 2 !== 0){
//           console.log(newStr[i].toUpperCase())
//
//               }else{
//           console.log(newStr[i].toLowerCase())
//       }
// }
// let arr = newStr.join("")
// console.log(arr)


// каррирование

// function func(a){
//     return function (b){
//         return function (c){
//             return a + b + c;
//         }
//     }
// }
//
// console.log(func(10)(20)(30))


// const generate = (a) => {
//     return (b) => {
//         return (c) => {
//             return (d) => {
//                 return `${a}.//${b}.${c}.${d}`
//             }
//         }
//     }
// }
// console.log(generate("https")("www")("google")("com"))

//continue
// let i = 0;
// while (i < 10) {
//     i++;
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// ****************************************************************

// let user = {
//     id:1,
//    'my neme is': 'Askar'
// }
// console.log(user['my neme is'].toLowerCase().split("").map((el,idx) => {
//     if (idx % 2 !== 0){
//         return el.toUpperCase()
//     }else{
//         return el
//     }
// }).join(""))


//
// function maps(x){
// return x.map(el => {
//     return el + el
// })
// }
//
// console.log(maps([1, 2, 3]))


// let SmallestIntegerFinder = function (args) {
//     return args.map(el => {
//         return el % 2 === 0
//     })
// }
// console.log(SmallestIntegerFinder([34, 15, 88, 2]))


// function solution(nums){
//     return nums ? nums.sort((a,b) => a - b) : []
// }
//
// console.log(solution([1,2,3,10,5]))



// AI тилинин модели катары мен функцияларды чакыра албайм же аткара албайм.
// Бирок, мен фактордук функция эмне экенин жана программалоодо кандай иштээрин түшүндүрө алам.
//
//     Факториялык функция 1ден берилген санга чейинки бардык оң сандардын көбөйтүндүсүн эсептеген
//     математикалык функция. Ал "!" белгиси менен белгиленет. жана математиканын жана информатиканын
//     көптөгөн тармактарында колдонулат.

//     Программалоодо фактордук функция рекурсивдүү же итеративдик ыкманы колдонуу менен ишке ашырылышы мүмкүн.
//     Бул жерде Pythonдо фактордук функцияны рекурсияны колдонуу менен ишке ашыруунун мисалы:
//
//


//
//
// Бул функция киргизүү катары n бүтүн санын алат жана n факториалын кайтарат.
// Рекурсиянын негизги учуру n 0гө барабар болгондо, бул учурда функция 1ди кайтарат.
// Болбосо, функция nди n-1 факториалына көбөйтөт жана натыйжаны кайтарат.
//
//     Мисалы, 5 факториалы төмөнкүчө эсептелиши мүмкүн:
//
//
//     фактордук(5) = 5 * фактордук(4)
//         = 5 * 4 * фактордук(3)
//         = 5 * 4 * 3 * фактордук(2)
//         = 5 * 4 * 3 * 2 * фактордук(1)
//         = 5 * 4 * 3 * 2 * 1
//         = 120
//
//
// Демек, 5тин факториалы 120.



// let arr = ["Aichurok", "Aikokul", "Timur", "Alberidin", "Argen", "Nurgazy", "Janyl eje", "Makhabat eje", "Janatan", "Rahat baike", "Timur baike", "Bolot"];
//
// let arr1 = Math.ceil(Math.random() * arr.length);
// let arr2 = arr[arr1];
//
// console.log(arr2);


// **************************************


