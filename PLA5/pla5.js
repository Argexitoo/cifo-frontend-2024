/** ---------------------------------------------------------------------------
 * Desenvolupament Web Frontend
 * PLA 5: Fonaments de JavaScript
 * Mòdul: 2
 * Dedicació: 5 dies (25 hores)
 * Data d'entrega: 27 de maig de 2024
 * ------------------------------------------------------------------------- */

/* Task 1 ------------------------------------------------------------------ */

const question = 'What is the answer to life, universe and everything?'
let answer = 0
answer = 42

// Write all your variables below this line:

const cifo = "CIFO"
let pi = 3.1416
let distance = 0
distance = (answer + 1000) + 195
const yeap = true
const nope = false
let condition = question === cifo ? 'Es el mateix text' : 'No es el mateix text'
condition = distance > 42000 ? 'És més gran' : 'No és més gran'
const pi_sign = 'π'
const pi_text = `The number ` + pi_sign + ` is a mathematical constant, approximately equal to ` + pi + ` defined in...`
const cifo_text = `El Bruc is approximately ${distance} meters away from the ${cifo} location`
console.log(cifo_text)


/* Task 2 ------------------------------------------------------------------ */

const lang = 'ca'
const age = 38

// Write your first `if` block below this line:

if (age >= 30) {
  console.log('You are a boomer!')
}

// Write your second `if` block below this line:

if (age <= 20) {
  console.log('Too young to be a boomer')
} else if (age >= 21 || age <= 35) {
  console.log('Quite close to be a boomer')
} else {
  console.log('A boomer for sure')
}

// Write your `switch` block below this line:

switch (lang) {
  case 'es': 
    console.log('Spanish')
    break;
  case 'ca':
    console.log('Catalan')
    break;
  case 'fr':
    console.log('French')
    break;
  default:
    console.log('Unkown')
}

// Replace `null` in the line below with your your one-liner using a ternary operator:
console.log(lang === 'ca' ? 'Catalan' : 'Some other language')

/* Task 3 ------------------------------------------------------------------ */

let num = 9
let sum = 0
let product = 1

// Write your `for` loop below this line:

for (let i = 1; i <= num; i++) {
  sum += i
}
console.log(sum)

// Write your `while` loop below this line:
i = 1
while (i <= num) {
  i++
  product *= i
}
console.log(product)

// Write your `do...while` loop below this line:

do {
  console.log(num)
  num = num -1;
} while (num >= 3);

/* Task 4 ------------------------------------------------------------------ */
// Faltava afegir el argument a la funció
function func1(n) {
  return n + 10
}
// Faltava afegir el return a la funció
function func2(n) {
 return n = n * n
}
// Faltava afegir els dos arguments a la funció i crear el return de la mateixa
function func3(name, city) {
  return `Hello ${name} from ${city}`
}
// Estavem retornant la el valor de n quan ens interessa tornar el valor de m
function func4(n) {
  n = n * 42
  let m = n / 10
  m = m + ' is a pretty big number'
  return m
}
// Faltava afegir els arguments a la funció
function func5(city1, city2) {
  return 'First we take ' + city1 + ' then we take ' + city2
}
// Error al definir el nom de la funció. (func6 is not defined)
function func6(n) {
  n = 'Double of ' + n + ' is ' + n * 2
  return n
}

// Do not modify anything in the console.log lines below!
// But uncomment them to check your results.

// expected 23, got error :(
// console.log(func1(13));

// expected 25, got undefined :(
// console.log(func2(5));

// expected 'Hello Mike from London', got undefined :(
// console.log(func3('Mike', 'London'));

// expected '63 is a pretty big number', got number 630 :(
// console.log(func4(15));

// expected 'First we take Manhattan then we take Berlin', got error :(
// console.log(func5('Manhattan', 'Berlin'));

// expected 'Double of 7 is 14', got error :(
// console.log(func6(7));

/* Task 5 ------------------------------------------------------------------ */

const numbers = [1, 2, 3, 4, 5]
const days = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')
const mixed = [Date.now(), 'New York', 6.62607004, [['Paris', 'Rome']], { a: 97, e: 101, i: 105 }, numbers]
const years = [1978, 2021, 1657, 2301, 1867, 2008]

// Replace the `null`s in the code below with your one-liners:
console.log('days', days.length)
console.log('mixed', mixed[3])
const reversedNumbers = [...numbers].reverse();
console.log('numbers', reversedNumbers[0])
console.log('mixed101', mixed[4].e)
console.log('mixedRome', mixed[3][0][1])

// Replace the `null`s in the code below (do not add any new line):
console.log(numbers)
const tuesdayToFriday = days.slice(1,5)
console.log(tuesdayToFriday)
const sortedDays = days.sort()
console.log(sortedDays)
const number = numbers.join('')
console.log(parseInt(number))
const maxYear = Math.max(...years)
console.log(maxYear)

// Today is Friday
// Today is Monday
// Today is Saturday
// Today is Sunday
// Today is Thursday
// Today is Tuesday
// Today is Wednesday
// Write your `for` loop below this line:
for (let day of sortedDays) {
  console.log(`Today is ${day}`);
}

/* Task 6 ------------------------------------------------------------------ */

const laptop = {
  brand: 'Apple',
  model: 'MacBook Pro',
  os: 'macOS Sonoma',
  year: 2022,
  memory: '16 GB',
  processor: '3 GHz Dual-Core Intel Core i7',
  apps: ['Visual Studio Code', 'Xcode', 'Dropbox', 'Magnet'],
  owner: {
    name: 'Albert',
    phone: '678901234',
  },
}

// Replace the `null`s in the code below with your one-liners:
console.log(laptop.os)
console.log(laptop.year + 10)
console.log(laptop.apps[3])
console.log(laptop.owner.phone)

// Write your code to change some properties below this line:
laptop.memory = '32 GB'
laptop.apps.push('Spotify', 'Docker')
laptop.apps.splice(0, 1)
laptop.owner.name = 'Judit'


// brand property has value Apple
// model property has value MacBook Pro
// os property has value macOS Sonoma
// year property has value 2022
// memory property has value 32 GB
// processor property has value 3 GHz Dual-Core Intel Core i7
// apps property is an array with 5 elements
// owner property is an object with 2 fields
// Write your `for` loop below this line:
for (const property in laptop) {
  console.log(`${property}: ${JSON.stringify(laptop[property])}`);
}

/* Task 7 ------------------------------------------------------------------ */
// Quina funció o operador podem fer servir per veure si una variable conté un número?
// Podriem utilitzar l'operador de typeof
console.log(typeof(num))
// Quina funció –i amb quina sintaxi concreta– podem fer servir per canviar totes les vegades que una
// seqüència de caràcters apareix en una cadena de text? Per exemple per passar d' abracadabra a ibricidibri.
// Podem utilitzar la funció de replace() per substituir per un altre la part que volem
console.log(cifo.replace('O', 'I'))
// Quina funció fem servir per obtenir el component mes (month, un número) d'una data?
let today = (new Date())
console.log(today.getMonth() + 1)
// Hi ha alguna cosa rellevant a tenir en compte amb el valor que obtenim?
// Hem de tenir en compte que retorna el mes de la data especificada començant des de 0. Així que hauríem de sumar-li 1 perquè ens quadri el mes en el qual estem.
// Quina funció podem fer servir per convertir una cadena de text a minúscules?
// Podem fer servir la funció toLowerCase()
console.log(cifo.toLowerCase())
// Quina funció podem fer servir per obtenir la representació ISO d'una data?
// Podem utilitzar la funció toISOString() per recuperar les dades en el format ISO
console.log(today.toISOString())
// Quina funció podem fer servir per convertir un array de números en un altre array també de números però
// on cada número sigui el quadrat del número original? Per exemple, passar de l'array [1, 2, 3, 4] a
// l'array [1, 4, 9, 16] .
// Podriem fer servir la funció de map() ja que podem afectar a cada element del array
console.log(numbers.map(num => num * num)) 
// Quina funció podem fer servir per filtrar tots els elements d'un array, de tal manera que obtinguem un altre
// array només amb els elements que compleixin una determinada condició? Per exemple, passar de l'array
// [null, 'Lucas', undefined, 42, {}, 13, new Date(), [], 0] a l'array [42, 13, 0] , on el criteri triat en
// aquest cas ha estat quedar-nos només amb els elements que són números.
// Podriem utilitzar la funció de filter i despres afegir el typeof per filtrar només quan siguin numbers
console.log(mixed.filter(el => typeof el === 'number'))


