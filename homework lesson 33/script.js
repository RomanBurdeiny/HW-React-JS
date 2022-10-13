// // С ниже приведенным массивом пользователей решить следующие задачи:
// // 1. Получить средний возраст пользователей.
// // 2. Отсортировать массив по возрасту от большего к меньшему.
// // 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста.
// //    Например, есть ли пользователь, которому 22 года? Ответ должен быть: true
// const users = [
//    {
//       id: 1,
//       username: "Michael Lawson",
//       age: 22,
//    },
//    {
//       id: 2,
//       username: "Tom Spot",
//       age: 32,
//    },
//    {
//       id: 3,
//       username: "Kate Ford",
//       age: 18,
//    }
// ];
// let res = 0
// for (let key of users) {
//    res = res + key.age
//    console.log(res / 3)
// }

// function userAge(age) {
//    for (let key of users) {
//       if (key.age == age) {
//          console.log(true)
//       } else false
//    }
// }
// userAge(21)


// function sortByAge() {
//    const newUsers = []
//    for (let key of users) {
//       let time = key.age
//       setTimeout(() => {
//          newUsers.push(key)
//       }, time);
//    } console.log(newUsers)
// }
// sortByAge()


// // #1
// // Поменять буквы в обратном порядке
// // для каждого слова
// // "Welcome to this Javascript Guide!" ->
// // emocleW ot siht tpircsavaJ !ediuG

// const string = "Welcome to this Javascript Guide!"
// let newString = string.split(' ').reverse().join(' ').split('').reverse().join('')
// console.log(newString)


// // #2
// // Есть массив из нескольких массивов с числами
// // Написать функцию, которая будет возвращать сумму всех чисел во всех массивах
// // Пример сумма [[1,2], [3,2], [5, 6, 2], [4]] должна вернуть 25
// const matrix = [[1,2], [3,2], [5, 6, 2], [4]]
// const newMatrix = matrix.flat()
// const sum = newMatrix.reduce(function (currentSum, currentNumber) {
//   return currentSum + currentNumber
// }, 0)
// console.log(sum)

// С ниже приведенным объектом решить следующие задачи:
//     1.            Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количество студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
   mathematics: {
      students: 200,
      teachers: 6
   },
   biology: {
      students: 120,
      teachers: 6
   },
   chemistry: {
      students: 100,
      teachers: 3
   },
   geography: {
      students: 60,
      teachers: 2
   },
}
let subjectsString = []
for (let key in subjects) {
   subjectsString.push(key)
}
subjectsString = subjectsString.join(', ')
console.log(subjectsString)

function peopleCounter(obj) {
   let count = 0
   for (let key in obj) {
      for (let item in obj[key]) {
         count = count + obj[key][item]
      }
   } console.log(count)
}

function averageStudents(obj) {
   let count = 0
   let countSubjects = 0
   for (let key in obj) {
      count = count + obj[key].students
      countSubjects++
   }
   count = count / countSubjects
   console.log(count)
}

function getArrOfObj(obj) {
   let arr = []
   for (let key in obj) {
      arr.push(obj[key])
   } console.log(arr)
}

function sortSubjByCountOfTeacers (obj) {
   let time = 0
   let newArr = []
   for (let key in obj) {
      time = obj[key].teachers
      setTimeout(() => {
         newArr.unshift(obj[key])
      }, time);
   } console.log(newArr)
}

peopleCounter(subjects)
averageStudents(subjects)
getArrOfObj(subjects)
sortSubjByCountOfTeacers(subjects)