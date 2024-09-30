// 7-http_express.js
const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const databaseFilename = process.argv[2];
const readStudentsFromCSV = (filename, callback) => {
  const students = [];
  fs.createReadStream(filename)
    .pipe(csv())
    .on('data', (data) => {
      if (data.firstname && data.lastname) {
        students.push(data);
      }
    })
    .on('end', () => {
      callback(students);
    });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  readStudentsFromCSV(databaseFilename, (students) => {
    const totalStudents = students.length;
    const csStudents = students.filter((student) => student.field === 'CS');
    const sweStudents = students.filter((student) => student.field === 'SWE');

    const csList = csStudents.map((student) => `${student.firstname} ${student.lastname}`).join(', ');
    const sweList = sweStudents.map((student) => `${student.firstname} ${student.lastname}`).join(', ');

    res.send('This is the list of our students\n'
              + `Number of students: ${totalStudents}\n`
              + `Number of students in CS: ${csStudents.length}. List: ${csList}\n`
              + `Number of students in SWE: ${sweStudents.length}. List: ${sweList}`);
  });
});
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
module.exports = app;
