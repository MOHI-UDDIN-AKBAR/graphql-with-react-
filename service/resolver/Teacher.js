const { teachers, subjects } = require("../db.js");

exports.Teacher = {
  subject: ({ id }, args, context) =>
    subjects.filter((subject) => subject.teacherId === id),
};
