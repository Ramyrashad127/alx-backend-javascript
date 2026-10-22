# 0x06. Unit Tests in JavaScript

## Description
This module establishes unit and integration testing patterns for JavaScript and Node.js applications using **Mocha**, **Chai**, **Sinon**, and **Supertest**.

## Learning Objectives
- Writing test suites using `describe` and `it` blocks in Mocha.
- Asserting outcomes with Node `assert` and Chai (`expect`, `should`).
- Spying on function calls with Sinon spies (`sinon.spy`).
- Replacing complex dependencies and network calls with Sinon stubs (`sinon.stub`).
- Testing asynchronous operations and HTTP servers.
- Full API integration testing for Express applications.

## Tasks Summary

| File / Folder | Topic | Description |
| :--- | :--- | :--- |
| `0-calcul.js` & `0-calcul.test.js` | Basic Math & Assert | Rounding numbers and asserting results with `assert`. |
| `1-calcul.js` & `1-calcul.test.js` | Types & Error Handling | `SUM`, `SUBTRACT`, and `DIVIDE` with `Error` handling. |
| `2-calcul_chai.js` & `2-calcul_chai.test.js` | Chai Assertions | Refactoring test cases to use Chai's `expect`. |
| `3-payment.js` & `3-payment.test.js` | Sinon Spies | Verifying that `Utils.calculateNumber` is called via spy. |
| `4-payment.js` & `4-payment.test.js` | Sinon Stubs | Replacing `calculateNumber` with a stub returning fixed value. |
| `5-payment.js` & `5-payment.test.js` | Sinon Hooks | Using `beforeEach` and `afterEach` for spy cleanup. |
| `6-payment_token.js` & `test` | Async Testing | Testing resolved Promise callback in Mocha using `done()`. |
| `8-api/` | Express API Integration | Integration testing with `supertest` for root endpoint `/`. |
| `9-api/` | Regex URL Parameters | Express endpoint `/cart/:id` validating numeric ID. |
| `10-api/` | POST Endpoints & JSON | Testing `/available_payments` and POST `/login`. |

## Running Tests
```bash
npm test
```

## Author
- **Ramy Rashad** - [GitHub](https://github.com/Ramyrashad127)
