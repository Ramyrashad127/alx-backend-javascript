// 7. Create a more complex HTTP server using Express
const express = require('express');
const fs = require('fs');

const app = express();
const DB = process.argv.length > 2 ? process.argv[2] : '';

const Students = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const Parts = [];
        const Lines = data.toString('utf-8').trim().split('\n');
        const Groups = {};
        const Names = Lines[0].split(',');
        const studentPropNames = Names.slice(
          0,
          Names.length - 1,
        );

        for (const line of Lines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(Groups).includes(field)) {
            Groups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          Groups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(Groups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        Parts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(Groups)) {
          Parts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(Parts.join('\n'));
      }
    });
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  Students(DB)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(1245, () => {
  console.log(`Server listening on PORT ${1245}`);
});

module.exports = app;
