// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().


// result = prompt("Input a number");
// const number =parseInt(result);
// if (number===18) {
//     alert("This is right");
// }else{
//     alert("Try again")
// }

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min=Math.floor(Math.random()*(59-0)+0)
// if (min<15) {
//     alert(`${min} in  first quarter`);
// }else if(min>=15 && min<30){
//     alert(`${min} in  second quarter`);
// }else if(min>=30 && min<45){
//     alert(`${min} in  third quarter`);
// }
// else {
//     alert(`${min} in  last quarter`);
// }

// // Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// // (запитуй це значення у користувача через prompt). 
// // Якщо вона має значення '1', то у змінну result запишіть 'зима',
// // якщо має значення '2' - 'весна' і так далі.
// // Розв'яжіть завдання через switch-case.
// // Не забудьте про дефолтне значення, на випадок, якщо користувач 
// // введе в prompt щось інше. В такому випадку result має набувати значення:
// // "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// // Значення змінної result виведіть в консоль.

// let result
// const num=parseInt(prompt("Chose 1 or 2 or 3 or 4!"));
// switch (num) {
//     case 1:
//         result="Winter";
//         break
//     case 2:
//         result="Spring";
//         break
//     case 3:
//         result="Summer";

//         break
//     case 4:
//         result="Autumn";
//         break

//     default:
//         alert("Only numbers from 1 to 4 accepted")
//         break;
// }
// console.log(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const numSecond=parseInt(prompt("Put the number of seconds"));
// function counter(numSecond){
//     const hours=Math.floor(numSecond/60);
//     const hoursModified=String(hours).padStart(2,"0");
//     const minutes=numSecond%60
//     const minutesModified=String(minutes).padStart(2,"0");
//     return `${hoursModified}:${minutesModified}`
// }
// console.log(counter(numSecond))

// Task-5
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login=prompt("What is your login?")
// console.log(login);
// if (login==="Admin") {
//     const password=prompt("What is your password?")
//     if (password==="Main")
//         alert("Hello")
//     else{
//         alert("Password is wrong")
//     }
// } else if(login==="" ) {
//     alert("Cunseled")
// } else{
//     alert("I don't know you")
// }

// task-6
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let i=0
// while(i<=20){ 
//     console.log(i)
//     i++
// }


// task-7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// let sum=0
// function getNumbers(min,max){
  
//     for (let index = max; index >=min ; index--) {
//         console.log(index);
//         if(index%2===0){
//         sum+=index
//         }
//     }
//     return sum
// }
// getNumbers(1,10)
// console.log(sum);


// task-8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// let a
// let b
// function validation(a,b){
//         if (typeof a==="number" && typeof b==="number"){;
//             return true;
//         } else{
//             console.log( "Not a number");   
//             return false;
//         }
// }
// function min(a,b){
//    if (validation(a,b)){
//       if (a<b){
//         return a
//       }else if(a>b){
//         return b
//       }else{
//         return("a=b")
//       }
//     }
// }
// console.log(min(5,10))

// task-9
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age){
//     if (age>=18){
//        return true
//     }else{
//         const confirmation=confirm("Maybe you are 18 or more?")
//         return confirmation
//     }
// }
// console.log(isAdult(15))


// task-10
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

let num= parseInt(prompt("Put any integer number from 1 "))
function validation(num){
    if(isNaN(num)||num<1||num !== Math.floor(num)){
        alert("Invalid input.Please put any integer number from 1")
        return false
    }else{
        return true
    }
}
function fizzBuzz(num){
    if(validation(num)){
     for( let index=1;index<=num;index++){
        if (index%3===0 && index%5===0) {
          console.log("FizzBuzz");
          
        } else if(index%5===0){
          console.log("Buzz");
          
        } else if (index%3===0){
           console.log("Fizz");
          
        } else{
          console.log(index)
        } 
     }
    } 
}
console.log(fizzBuzz(num))