// 5-http.js
const http = require('http');
const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const fields = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const student = lines[i].split(',');
      if (student.length === 4) {
        totalStudents += 1;
        const field = student[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0].trim());
      }
    }

    let output = `Number of students: ${totalStudents}\n`;
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }

    resolve(output.trim());
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.write('Error: No database file provided');
      res.end();
    } else {
      res.setHeader('Content-Type', 'text/plain');
      countStudents(databasePath)
        .then((output) => {
          res.statusCode = 200;
          res.write('This is the list of our students\n');
          res.write(output);
          res.end();
        })
        .catch((error) => {
          res.statusCode = 500;
          res.write(error.message);
          res.end();
        });
    }
  } else {
    res.statusCode = 404;
    res.write('Not Found');
    res.end();
  }
});
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
module.exports = app;
