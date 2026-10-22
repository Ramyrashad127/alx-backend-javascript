# 0x05. Node.js Basics

## Description
This module explores **Node.js** fundamentals: command-line interactions, reading files synchronously and asynchronously using `fs`, constructing native HTTP servers, and building web applications with **Express.js**.

## Learning Objectives
- Using `process.stdin` and `process.stdout` in interactive CLI programs.
- Synchronous file reading (`fs.readFileSync`) vs Asynchronous Promise-based file reading (`fs.readFile`).
- Parsing and aggregating CSV data.
- Building HTTP servers using the native `http` module.
- Routing and middleware in **Express.js**.
- Handling query parameters and URL route params.

## Tasks Summary

| File | Description |
| :--- | :--- |
| `0-console.js` | Function that prints a string to `process.stdout`. |
| `1-stdin.js` | Interactive CLI program reading user input from `process.stdin`. |
| `2-read_file.js` | Synchronous CSV reader displaying employee/student counts per field. |
| `3-read_file_async.js` | Asynchronous Promise-based CSV reader. |
| `4-http.js` | Simple HTTP server created with `http.createServer`. |
| `5-http.js` | HTTP server returning parsed student counts from CSV asynchronously. |
| `6-http_express.js` | Express.js application serving root path. |
| `7-http_express.js` | Express.js application with dynamic route serving CSV student data. |
| `full_server/` | Modular Express server architecture with MVC pattern (Controllers, Routes). |

## Author
- **Ramy Rashad** - [GitHub](https://github.com/Ramyrashad127)
