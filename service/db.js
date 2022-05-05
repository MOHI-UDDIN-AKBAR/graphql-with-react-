const teachers = [
  {
    id: 1,
    name: "Arafat",
    age: 23,
    sex: "M",
    email: "mmaarafat@gmail.com",
  },
  {
    id: 2,
    name: "Samir",
    age: 23,
    sex: "M",
    email: "samir@gmail.com",
  },
  {
    id: 3,
    name: "Jayed",
    age: 24,
    sex: "M",
    email: "jayed@gmail.com",
  },
  {
    id: 4,
    name: "akhi",
    age: 20,
    sex: "F",
    email: "akhi@gmail.com",
  },
];

const subjects = [
  {
    id: 101,
    name: "Software engineering",
    teacherId: 2,
  },
  {
    id: 102,
    name: "Introduction to programming",
    teacherId: 1,
  },
  {
    id: 103,
    name: "Algorithm and complexity",
    teacherId: 2,
  },
  {
    id: 104,
    name: "Discrete interface",
    teacherId: 4,
  },
  {
    id: 105,
    name: "Introduction to java",
    teacherId: 2,
  },
  {
    id: 106,
    name: "Computer network",
    teacherId: 2,
  },
  {
    id: 107,
    name: "Introduction to python",
    teacherId: 3,
  },
];

module.exports = { teachers, subjects };
