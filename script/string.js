 // string => '' ""

 // let str = '12234'
 // console.log(str)
 // console.log(Number(str))
 // console.log(parseInt(str))
 // console.log(+str)

 // let number = 10
 // console.log(String(number))
 // console.log(number.toString())
 // console.log(number + '')



 // 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.
// let str = 'привет, мир!'
//  console.log(str)


 // 2. Вам даны переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
 // let str1 = 'привет'
 // let str2 = ' мир'
 // console.log(str1 + str2)


 // 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
// let name = ' Jon'
//  console.log(`привет ${name}`)


 // 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let age =  40
 // console.log(`мне ${age} лет!`)


 // 5. Вам даны четыре переменные.
 // Первая - для хранения количества дней. Присвойте ей значение "365".
 // Вторая - для хранения названия нашей планеты "Земля".
 // Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
 // Четвертая - для хранения слова "Солнце".
 // Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
 // "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."
// let a = "365"
//  let b = "Земля"
//  let c = "7 млрд."
//  let d = "Солнце"
//  console.log(`В нашем году ${a} дней. Днём у нас светит ${d}.
 // Население планеты ${b} составляет примерно ${c} человек. `)


 // Typeof:
 // 1. Вам дана переменная a=50. Выведите в консоль тип значения этой переменной.
 // let a = 50
 // console.log(typeof a)

 // 2. Вам даны переменные a=10, b=35. Создайте переменную result, и сделайте так,
 // чтобы в консоли значение переменной result было string.
 // let a = 10 , b = 35
 // let result = a + b + ''
 // console.log(typeof result)

 // 3. Вам дана переменная a=10, выведите в консоль тип этой переменной - string.
 // let a = 10
 // let textHi = 'Hello'
 // let res = a + textHi
 // console.log(typeof res)

 // =
// ==
// ===
//  <
//  >
//  <=
//  =>
//  !==

//  console.log(7 == '10')
//  console.log(10 !== 10)
//  console.log(10 > 11)
//  console.log(11 < 12)
//  console.log(12 <= 12)

 // && -  и, false
 // || - или, true

 // console.log(true && false)
 // console.log(true || false)

 // console.dir(false || 0 || false || 0 ||'')
 // console.log(10 && 20 && 'motion' && 11 && 0 || false)

 // if -> эгерде
 // else if -> же болбосо
 // else -> болбосо

//  let nam = 5
// if (nam > 5){
//  console.log('5 тен чон')
// } else if ( nam === 5){
//  console.log('5 ке барабар')
// }else {
//  console.log('5 тен кичине')
// }


 // let age = 20
 // if (age > 1 && age < 5){
 //  console.log('садик')
 // } else if (age > 5 && age <= 18){
 //  console.log('мектеп')
 // }else if (age > 18 && age < 24){
 //  console.log('универ')
 // }else if (age > 23 && age < 55){
 //  console.log('жумуш')
 // }else {
 //  console.log('пенсия')
 // }


 // let number = 3
 // if (number === 1 || number === 3 || number === 5 || number === 7 ){
 //  console.log(number + 100)
 // }else {
 //  console.log(number)
 // }


// *****************************************************************************************


     // 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.

//      let a = 10
//  if (a === 10){
//   console.log('Верно')
//  }else{
//   console.log('Неверно')
//  }


 // 2. Вам даны две переменные a=50, b=100. Составьте условие,
 // по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

 // let a = 50
 // let b = 100
 // if (a > b){
 //  console.log('a больше b')
 // }else{
 //  console.log('a меньше b')
 // }


 // 3. Вам дана переменная a=-2. Составьте условие, по которому в
 // консоль будет выводиться 'positive' - если число больше 0,
 // 'равно' если число равно 0, "negative" если число меньше 0.

 // let a = -2
 // if (a > 0){
 //  console.log('positive')
 // }else if (a === 0){
 //  console.log('равно')
 // } else{
 //  console.log('negative')
 // }


 // 4. Вам дана переменная number=45. Составьте условие,
 // по которому будет выводиться в консоль "Четное число", "Нечетное число".

 // let  number = 45
 // if (number % 2 === 0 ) {
 //  console.log("Четное число")
 // }else {
 //  console.log("Нечетное число")
 // }


 // 5. Вам даны две переменные a=10, b=2. Составьте условие,
 // по которому, остаток деления a на b, будет выводиться консоль
 // "Четное число", "Нечетное число".

//  let a = 10
//  let b = 2
//  let result = a / b
// if (result % 2 === 0){
//  console.log("Четное число")
// }else{
//  console.log("Нечетное число")
// }


 // 6. Вам дана переменная s. Составьте условие, по которому в
 // консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let s = 23
//  if (typeof  s === "string"){
//      console.log('string')
//  }else if (typeof s === "number"){
//      console.log("number")
//  }else {
//      console.log("boolean")
//  }


 // 7. Вам дана переменная а. Если переменная a больше
 // одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

 // let a = 1
 //  if (a > 1 && 9){
 //   console.log('Верно')
 //  }else{
 //   console.log('Неверно')
 //  }


 // 8. Вам дана переменная а. Если переменная a равна
 // трем или равна семи, то прибавьте к ней 7, иначе поделите
 // ее на 10. Выведите новое значение переменной в консоль.

 // let a = 7
 // if (a === 3 || a === 7 ){
 //  console.log(a + 7)
 // }else{
 //  console.log(a / 10)
 // }


 // 9. Вам даны переменные а , b. Если переменная a равна
 // или меньше 0, а переменная b больше или равна 5, то
 // выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

 //  let a = 0
 // let b = 5
 // if (a <= 0 && b >= 5){
 //  console.log(a + b)
 // }else {
 //  console.log(a - b)
 // }


 // 10. Вам даны переменные a , b. Если переменная a больше
 // 4-х и меньше 10-ти, или переменная b больше или равна
 // 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

 // let a = 8
 // let b = 12
 // if (a > 4 && a < 10 || b >= 7 && b < 17){
 //  console.log('Верно')
 // }else {
 //  console.log('Неверно')
 // }
 

 // let mouth = 15
 // if (mouth  >= 1 && mouth <= 2 || mouth === 12){
 //     console.log('кыш')
 // }else if (mouth > 2 && mouth < 6){
 //     console.log('жаз')
 // }else if (mouth > 5 && mouth < 9){
 //     console.log('жай')
 // }else if (mouth > 8 && mouth < 12){
 //     console.log('куз')
 // }  else {
 //     console.log('мындай мезгил жок')
 // }













