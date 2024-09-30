// 2-read_file

const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' }).split('\n').filter((line) => line.length > 0);
    const fields = {};
    const students = {};
    for (const [i, line] of data.entries()) {
      if (i === 0) {
        const headers = line.split(',').map((header) => header.trim());
        for (const header of headers) fields[header] = -1;
      } else {
        const student = line.split(',').map((field) => field.trim());
        if (student.length !== Object.keys(fields).length) throw new Error(`Number of fields does not match number of headers in ${path}`);
        const studentData = {};
        for (const [i, field] of student.entries()) studentData[Object.keys(fields)[i]] = field;
        if (studentData.location in students) students[studentData.location].push(studentData);
        else students[studentData.location] = [studentData];
      }
    }
    delete students.location;
    console.log(`Number of students: ${data.length - 1}`);
    for (const [location, studentList] of Object.entries(students)) {
      console.log(`Number of students in ${location}: ${studentList.length}. List: ${studentList.map((student) => student.firstname).join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
