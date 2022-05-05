const { teachers, subjects } = require("../db.js");

exports.Query = {
  teachers: (parent, args, context) => {
    return teachers;
  },
  subjects: (parent, args, context) => {
    return subjects;
  },
};
