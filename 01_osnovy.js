// alert('Hello')
// const name = 'Aleksandr'
// const secondName = 'Solonovich'
// let age = 43
// name = 'Sanchello'
// const isProgrammer = true
//
// const _ = 'chertovschina'
// const $ = 'besovschina'
//
// const withNum5 = '5'
//
// console.log(name + secondName)
//
// const lastName = prompt('Введите фамилию')
// alert(name + ' ' + lastName)
//
// 3 Операторы
// const currentYear = 2022
// const birthYear = 1979
// let age = currentYear - birthYear
//
// console.log(++age)

//const isProgrammer = true
//const name = 'Alexander'
//const age = 26
//let x
//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)

//const fullAge = 43
//const birthYear = 1979
//const currentYear = 2022
//const isFullAge = (currentYear - birthYear) >= fullAge
//console.log(isFullAge)

//const courseStatus = 'pending'
//if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить.')
//} else if (courseStatus === 'pending') {
//    console.log('Курс пока задерживается')
//} else {
//    console.log('Курс не получился')
//}
//
// function calculateAge (year) {
//     return 2022 - year;
// }
//
// const myAge = calculateAge(1979)
// console.log(myAge)
//
// function logInfoAbout (name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age + ' лет')
//     } else {
//         console.log('Человек по имени ' + name + ' еще не родился!')
//     }
// }
// logInfoAbout ('Александр', 1979)
// logInfoAbout ('Глеб', 1993)
// logInfoAbout ('Иннокентий', 2023)


// Массивы

// const cars = ['Мазда', 'Феррари', 'Мазератти']
// const cars = new Array('Мазда','Феррари','Мазератти')
// console.log(cars[2])
// console.log(cars.length)
// cars[0] = 'Порше'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 ЦИКЛЫ

// const cars = ['Мазда','Феррари','Мазератти','Hyundai','Smart']
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// const cars = ['Мазда','Феррари','Мазератти','Hyundai','Smart']
// for (let car of cars) {
//     console.log(car)
// }

// 11 ОБЪЕКТЫ

const chel = {
    firstName: 'Санек',
    lastName: 'Крафтовский-Комов',
    year: 1979,
    languages: ['Ru','Eng','Ita'],
    hasWife: false,
    greet: function () {
        console.log('Привет от Санька')
    }
}
console.log (chel.firstName)
console.log(chel['lastName'])

const key = 'languages'
console.log(chel[key])
chel.hasWife = true
chel.isProgrammer = true
chel.isDrugAddict = true
console.log(chel)
chel.greet()
