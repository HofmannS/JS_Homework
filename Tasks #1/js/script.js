////// ДЗ
// 1) 1 - в задаче повыше учесть еще и регистр букв.
// Anna !== annA (надо исправить чтобы регистр не вляил на результат)
let word = "Anna"
console.log(`Задача №1 
    Ответ: ${word.split("").reverse().join("").toLowerCase() === word.toLowerCase() ? "Палиндром" : "Не палиндром"}`)
// 
// 2) Средняя задача
// Напишите программу, которая принимает строку из чисел, разделенных запятыми (например, "1,2,3,4,5") и выводит сумму всех чисел.

let x = "1,2,3,4,5"
let arr = x.split(",")
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += +arr[i]
}
console.log(`Задача №2 
    Ответ: ${result}`);


// 3) Простая задача
// Дана массив их строк. Программа должна подсчитать количество слов, которые содержат больше 5 символов.
let array = ["Яблоко", "Киви", "Апельсин", "Груша"]
let count = 0
for (let i = 0; i < array.length; i++) {
    if(array[i].length > 5){
        count++
    }
}
console.log(`Задача №3 
    Ответ: ${count}`);


// 4) Простая задача
// Создайте массив чисел от 1 до 20. Выведите все четные числа из этого массива.
let newArray = [];
let evenArray = []
for (let i = 0; i <= 20; i++) {
    newArray.push(i)
    if(newArray[i] % 2 === 0){
        evenArray.push(i)
    }
}
console.log(`Задача №4 
    Ответ: ${evenArray}`);


// 5) Сложная задача
// Дана строка из нескольких слов, разделенных пробелами. Напишите программу, которая переворачивает каждое слово в строке и выводит полученный результат.
let sentence = "улыбок тебе дед макар"
let strArray = sentence.split(" ")
let reversStrArray = []
for (let i = 0; i < strArray.length; i++) {
    reversStrArray.push(strArray[i].split("").reverse().join(""))
}
console.log(`Задача №5 
    Ответ: ${reversStrArray.join(" ")}`)


// 6) Средняя задача
// Сгенерируйте массив из 10 случайных чисел от 1 до 100. Найдите максимальное и минимальное число в массиве, а также их разницу.
let genArray = []
let numMin = 100
let numMax = 1
for (let i = 0; i <= 9; i++) {
    genArray.push(Math.round(Math.random() * 100))
    if(genArray[i] < numMin){
        numMin = genArray[i]
    }
    if(numMax < genArray[i]){
        numMax = genArray[i]
    }
}
console.log(genArray);
console.log(`Задача №6 
    Ответ: Минимальное число = ${numMin}; Максимальное число = ${numMax}; Их разность = ${numMax-numMin}`);


// 7) Сложная задача
// Дан массив чисел, например [10, 15, 3, 7, 20, 8, 25]. Найдите два числа, сумма которых равна 25, и выведите их. Если таких чисел нет, выведите сообщение об этом.
let numArray = [10, 15, 3, 7, 20, 8, 25]
for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < numArray.length; j++) {
        if (numArray[i] + numArray[j] === 25 && i != j) {
            console.log(`Задача №7 
    Ответ: сумма чисел ${numArray[i]} и ${numArray[j]} равна 25`);
        }else {
    //         console.log(`Задача №7 
    // Ответ: в массиве нет чисел, сумма которых равна 25`);
        }
    }
}
// 8) Средняя задача
// Напишите программу, которая принимает строку из букв и цифр (например, "a1b2c3d4"), и создает два массива отдельно с числами и отдельно с буквами из этой строки: [1, 2, 3, 4] [a, b , c, d]
let str = "a1b2c3d4"
let stringArray = str.split("")
let num = []
let lett = []
for (let i = 0; i < stringArray.length; i++) {
    if (isNaN(stringArray[i])) {
        lett.push(stringArray[i])
    }else{
        num.push(stringArray[i])
    }
}
console.log(`Задача №8 
    Ответ: Строка ${str}  разделена на массив чисел ${num} и массив букв ${lett}`);

// 9) Сложная задача
// Дан массив строк, например ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]. Объедините их в одну строку, добавив между ними символ -, но только между строками, где колиечство букв совпадает.
let abc = ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]
let newStr = abc[0]
for (let i = 0; i < abc.length-1; i++) {
    if(abc[i].length != abc[i+1].length){
        newStr += abc[i+1]
    } else if(abc[i].length == abc[i+1].length){
        newStr = newStr + "-" + abc[i+1]
    }
}
console.log(`Задача №9 
    Ответ: ${newStr}`);

