// С ниже приведенным массивом решить следующие задачи:
// 1. Все функции и данные должны быть протипизированы
// 2. Создать строку из имен пользователей через запятую
// 3. Посчитать общее количнство машин у пользователей
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
interface User {
   name: string
   phone: string
   email: string
   animals?: string[]
   cars?: string[]
   hasChildren: boolean
   hasEducation: boolean
}

const users: User[] = [
   {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true
   },
   {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
   },
   {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
   }
]

const getUserNames: string = users.map((item: User) => item.name).join(', ')
const getCountOfCars: number = users.map((item: User) => item.cars).length
const getFilterOfEducation: object = users.filter((item: User) => item.hasEducation)
const getFilterOfAnimals: object = users.filter((item: User) => item.animals)
const getCarNames: string = users.filter((item: User) => item.cars).map((item: User) => item.cars).flat(1).join(', ')