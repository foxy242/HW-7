// task 1

if ("0") {

    console.log( 'Привіт' );
   
   }

// task 2

let message  ;
const nameJs = prompt('Яка офіційна назва JavaScript?')

if (nameJs === "ECMAScript") {
  message = 'Правильно!';
}
else {
  message = 'Ви не знаєте? ECMAScript!';
  }
console.log(message);

// task 3

const x1 = 10;
const x2 = 30;
const number = 45;

if (number < x1) {
  console.log(`${number} стоїть перед ${x1}`)
} else if (number > x2) {
  console.log(`${number} стоїть після ${x2}`)
} else if (number >= x1 || number <= x2) {
  console.log(`${number} стоїть між ${x1} та ${x2} `)
} else {
  console.log(`${number} стоїть перед ${x1} або ${number} стоїть після ${x2}`)
}

// task 4

const isOnline = false;
const isFriend = true;
const isDnd = false;

if (isFriend && isOnline && isDnd) {
 console.log('Ви можете відкрити чат з дргом')
} else {
  console.log('Ви не можете відкрити чат з дргом')
}

// task 5

const sub = prompt('Напишіть ваш тип підписки free, pro чи vip')

if (sub === "pro") {
  console.log('Ви можете зайти сюди')
} else if (sub === "vip") {
  console.log('Ви можете зайти сюди')
} else {
  console.log('Ви не можете зайти сюди')
}

// task 6

const num = prompt('Напишіть число від 55 до 99')

if (num > 55 || num < 99) {
  console.log('Число потрапляє в діапазон')
} else {
  console.log('Число не потрапляє в діапазон')
}

// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон". Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// task 7

const yers = 55

if (yers > 0 || yers < 18){
  console.log('ви дитина')
}

// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься, якщо йому 55 років. Назву групи вивести на екран.

// task 8

const name = 7;
const surName = 8;

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5,
// то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “ОЙ, неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// task 9

// Перепишіть конструкцію if, використовуючи тернарний оператор '?':

// let result;

// if (a + b < 4) {

//  result = 'Нижче';

// } else {

//  result = 'Вище';

// }
