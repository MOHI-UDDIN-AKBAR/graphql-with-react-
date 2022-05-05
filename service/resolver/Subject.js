const { teachers, subjects } = require("../db.js");

exports.Subject = {
  teacher: ({ teacherId }, args, context) =>
    teachers.filter((teacher) => teacher.id === teacherId),
};
