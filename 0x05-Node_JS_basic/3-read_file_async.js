// Description: Read a file asynchronously with Node.js
const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const Lines = data.toString('utf-8')
        .trim()
        .split('\n');
      const students = {};
      const dbFieldNames = Lines[0].split(',');
      const Names = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      for (const line of Lines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(students).includes(field)) {
          students[field] = [];
        }
        const studentEntries = Names
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        students[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(students)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(students)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
