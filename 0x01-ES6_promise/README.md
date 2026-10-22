# 0x01. ES6 Promises

## Description
This module covers asynchronous programming in modern JavaScript using **Promises** and `async`/`await` syntax, providing predictable flow control and centralized error handling.

## Learning Objectives
- The three Promise states: `pending`, `fulfilled`, and `rejected`.
- Creating Promises with `new Promise((resolve, reject) => ...)`.
- Consuming Promises using `.then()`, `.catch()`, and `.finally()`.
- Coordinating concurrent asynchronous tasks with `Promise.all()` and `Promise.allSettled()`.
- Handling errors gracefully with `try...catch` and `async`/`await`.

## Tasks Summary

| File | Description |
| :--- | :--- |
| `0-promise.js` | Function returning a basic Promise instance. |
| `1-promise.js` | Returning a Promise resolving `{ status: 200, body: 'Success' }` or rejecting with an Error. |
| `2-then.js` | Appending handlers with `.then()`, `.catch()`, and `.finally()`. |
| `3-all.js` | Resolving multiple promises concurrently with `Promise.all` (`uploadPhoto`, `createUser`). |
| `4-user-promise.js` | Returning an immediately resolved Promise with user object. |
| `5-photo-reject.js` | Returning a Promise rejection with an Error object. |
| `6-final-user.js` | Handling settled states using `Promise.allSettled` to report results. |
| `7-load_balancer.js` | Returning the result of the quickest Promise using `Promise.race`. |
| `8-try.js` | Division function throwing standard `Error` when dividing by zero. |
| `9-try.js` | Guard function executing a math operation and pushing output/errors to a queue. |
| `100-await.js` | Async function orchestrating async calls with `await` and catching errors cleanly. |

## Author
- **Ramy Rashad** - [GitHub](https://github.com/Ramyrashad127)
