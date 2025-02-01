//1). Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий только числа больше 10.
let arr = [12, 5, 8, 130, 44]
let newArr = []
//Вариант №1
newArr = arr.filter(function (value) {
    if(value > 10){
        return value
    }
})
//Вариант №2
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 10){
//         newArr.push(arr[i])
//     }
// }
console.log(`Задача №1. Ответ: newArr = ${newArr}`);

//----------------------------------------------------------------------------------

//2). Напишите программу, которая принимает массив строк и возвращает массив длин этих строк по возрастанию.["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]
let strArr = ["one", "three", "two"]
let lengthStrArr = []
for (let i = 0; i < strArr.length; i++) {
    lengthStrArr.push(strArr[i].length)
}
//Вариант №1
lengthStrArr.sort(function(next, current) {
    return next - current
})
//Вариант №2
// for (let i = 0; i < lengthStrArr.length; i++) {
//     for (let j = 0; j < lengthStrArr.length; j++) {
//         let temp
//         if(lengthStrArr[i] < lengthStrArr[j] && i != j){
//             temp = lengthStrArr[i]
//             lengthStrArr[i] = lengthStrArr[j]
//             lengthStrArr[j] = temp
//         }
//     }
// }
console.log(`Задача №2. Ответ: lengthStrArr = ${lengthStrArr}`);

//----------------------------------------------------------------------------------

//3). Есть массив строк. Отсортируйте строки по их длине (от самой короткой к самой длинной) и выведите результат. ['hello', 'world', 'javascript', 'code'] => ['code', 'hello', 'world', 'javascript']
let stringArray = ['hello', 'world', 'javascript', 'code']
//Вариант №1
stringArray.sort(function(next, current){
    return next.length - current.length
})
//Вариант №2
// for (let i = 0; i < stringArray.length; i++) {
//    for (let j = 0; j < stringArray.length; j++) {
//         let temp
//         if(stringArray[i].length < stringArray[j].length && i != j){
//         temp = stringArray[i]
//         stringArray[i] = stringArray[j]
//         stringArray[j] = temp
//         }
//     } 
// }
console.log(`Задача №3. Ответ: stringArray = ${stringArray}`);

//----------------------------------------------------------------------------------

//Средной сложности задачи:
//4). Подсчитайте количество гласных букв в строке. Выведите результат.
// let vowels = [a, e, i, o, u]
// "hello" -> 2
// "javascript" -> 3
// "world" -> 1

let vowels = ["a", "e", "i", "o", "u"]
let str1 = "hello"
let str2 = "javascript"
let str3 = "world"

//Вариант №1
function letterCount(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            count++
        }
    }
    return console.log(`Задача №4. Ответ: ${str} -> ${count}.`);
    
}
letterCount(str1)
letterCount(str2)
letterCount(str3)
//Вариант №2
// let count1 = 0
// let count2 = 0
// let count3 = 0
// for (let i = 0; i < str1.length; i++) {
//     if(vowels.includes(str1[i])){
//         count1++
//     }
// }
// for (let i = 0; i < str2.length; i++) {
//     if(vowels.includes(str2[i])){
//         count2++
//     }
// }for (let i = 0; i < str3.length; i++) {
//     if(vowels.includes(str3[i])){
//         count3++
//     }
// }
// console.log(`Задача №4. Ответ: ${str1} -> ${count1}, ${str2} -> ${count2}, ${str3} -> ${count3}`);

//----------------------------------------------------------------------------------

//5). Дана строка. Отсортировать её символы в алфавитном порядке.
// "javascript"-> "aacijprstv"
// "hello" -> "ehllo"
let word1 = "javascript"
let word2 = "hello"
console.log(`Задача №5. Ответ: "javascript" -> ${word1.split("").sort().join("")}, "hello" -> ${word2.split("").sort().join("")}`)

//----------------------------------------------------------------------------------

// Сложные задачи:
// 6). Есть произвольная строка, определите, сколько раз каждый символ встречается в этой строке. Выведите результат в формате: "Символ X => Y".
// "hello"
// Символ h => 1
// Символ e => 1
// Символ l => 2
// Символ o => 1

// При решении воспользовался помощью ИИ
function countLetters(str){
    let count = str.split("").reduce(function(acc, letter){
        acc[letter] = (acc[letter] || 0) + 1
        return acc
    }, {})
    for (const key in count) {
        console.log("Символ " + key + " => " + count[key]);
        
    }
}
console.log(`Задача №6. Ответ: `);
countLetters("hello")

//----------------------------------------------------------------------------------

//7). Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.
let numArr = [3, 1, 4, 1, 5, 9]

//Вариант №1
let result = numArr.filter(function(value){
    return value % 2 == 0
}).map(function(value){
    return value ** 2
}, 0).reduce(function(acc, value){
    return acc += value
})
//Вариант №2
// let result = 0
// for (let i = 0; i < numArr.length; i++) {
//     if(numArr[i] % 2 == 0){
//         result += numArr[i] ** 2
//     }
// }
console.log(`Задача №7. Ответ: сумма квадратов четных чисел = ${result}`);

//----------------------------------------------------------------------------------

// 8). Дан массив чисел. Проверить, упорядочены ли элементы по возрастанию.
// [1, 5, 9, 12, 36] => true
// [1, 5, 12, 9, 36, -5] => false

//Вариант №1 (решено с помощью ИИ)
let arrayA = [1, 5, 9, 12, 36]
let arrayB = [1, 5, 12, 9, 36, -5]
function isSorted(arr) {
    return arr.every((num, i) => i === 0 || num >= arr[i - 1]);
}
console.log(`Задача №8. Ответ: `);
console.log(`[1, 5, 9, 12, 36] => ${isSorted([1, 5, 9, 12, 36])} `);
console.log(`[1, 5, 12, 9, 36, -5] => ${isSorted([1, 5, 12, 9, 36, -5])}`);
//Вариант №2 (не знаю как избежать повтора true)
// for (let i = 0; i < arrayA.length - 1; i++) {
//         if(arrayA[i] > arrayA[i+1]){
//             console.log(`Задача №8. Ответ: ${arrayA} => false`); 
//             break 
//         }else{
//             console.log(`Задача №8. Ответ: ${arrayA} => true`);
//         }
//     }
// for (let i = 0; i < arrayB.length - 1; i++) {
//         if(arrayB[i] > arrayB[i+1]){
//             console.log(`Задача №8. Ответ: ${arrayB} => false`);  
//             break
//         }else{
//             console.log(`Задача №8. Ответ: ${arrayB} => true`);
//         }
//     }

//----------------------------------------------------------------------------------

//9). Дан массив слов. Создайте объект, где ключами будут первые буквы слов, а значениями — массивы слов, начинающихся на эти буквы. Например։
// ['apple', 'banana', 'apricot', 'blueberry', 'cherry'] -> 
// {
// a: ['apple', 'apricot'], 
// b: ['banana', 'blueberry'], 
// c: ['cherry']
// }
// При решении воспользовался помощью ИИ
let fruits = ['apple', 'banana', 'apricot', 'blueberry', 'cherry']
let list = fruits.reduce(function(acc, product){
    let firstLetter = product[0]
    if(!acc[firstLetter]){
        acc[firstLetter] = []
    }
    acc[firstLetter].push(product)
    return acc
}, {})
console.log(`Задача №9. Ответ: `);
console.log(list);
