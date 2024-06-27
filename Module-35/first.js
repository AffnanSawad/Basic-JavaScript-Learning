// // MODULE - 35 => MORE ABOUT JAVASCRIPT


// JavaScript is often abbreviated as JS. It is known for several characteristics and has specific terminologies associated with it:

// ### Characteristics of JavaScript

// 1. **Interpreted Language:**
//    - **Interpreted:** JavaScript code is typically executed directly from the source code without prior compilation to machine-level code. It is executed line-by-line, which allows for quick testing and iteration during development.
//    - **JIT Compilation:** Modern JavaScript engines, like V8, use Just-In-Time (JIT) compilation to improve performance by compiling frequently executed code paths to machine code during execution.

// 2. **Dynamic Language:**
//    - **Dynamic Typing:** Variable types are determined at runtime, allowing for more flexible and less verbose code. For example, you can reassign variables to different types.
//    - **Dynamic Objects:** Objects can be altered dynamically by adding or removing properties and methods at runtime.

// 3. **Garbage Collection:**
//    - **Automatic Memory Management:** JavaScript has built-in garbage collection, which automatically manages memory by freeing up memory that is no longer in use, helping to prevent memory leaks.

// 4. **High Abstraction:**
//    - **High-Level Language:** JavaScript provides a high level of abstraction, meaning it is far removed from the machine code and closer to human language, making it easier to write and read.
//    - **Built-in Functions and APIs:** JavaScript comes with a rich set of built-in functions, libraries, and APIs that abstract away complex tasks.

// 5. **Object-Oriented Programming (OOP):**
//    - **Prototype-Based OOP:** JavaScript uses prototypes rather than classical inheritance models. Objects can inherit properties and methods from other objects through their prototypes.
//    - **Classes (ES6):** With the introduction of ECMAScript 6 (ES6), JavaScript supports classes, making it easier to implement OOP principles similar to those in classical OOP languages.

// ### V8 Engine

// - **What is V8?**
//   - V8 is Google's open-source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Google Chrome, Node.js, and other applications to execute JavaScript code.
  
// - **How V8 Works:**
//   - **Parsing:** V8 parses the JavaScript code into an Abstract Syntax Tree (AST).
//   - **Interpreter (Ignition):** The AST is first executed by the Ignition interpreter, which generates bytecode.
//   - **JIT Compilation (TurboFan):** Frequently executed bytecode is then optimized and compiled into machine code by the TurboFan JIT compiler.
//   - **Garbage Collection:** V8 includes an efficient garbage collector (Orinoco) that reclaims memory by removing objects that are no longer needed.

// ### Summary
// JavaScript is a versatile and powerful language because of its interpreted nature, dynamic typing, automatic garbage collection, high level of abstraction, and support for OOP principles. The V8 engine enhances JavaScript performance through JIT compilation and efficient memory management.



// ### Single-Threaded Nature of JavaScript

// JavaScript is single-threaded, meaning it has a single call stack that it uses to execute code. This can be understood as the engine having only one main thread where tasks are executed sequentially.

// ### Asynchronous vs Synchronous in JavaScript

// **Synchronous:**

// - **Sequential Execution:** Synchronous operations are executed one after the other. Each operation waits for the previous one to complete before starting. This can lead to blocking, where a long-running operation prevents the execution of subsequent code.
// - **Example:**
//   ```javascript
//   console.log('Start');
//   // Synchronous delay (not recommended in real-world use)
//   for (let i = 0; i < 1e9; i++) {} // This loop blocks the execution
//   console.log('End');
//   ```

// **Asynchronous:**

// - **Non-blocking Execution:** Asynchronous operations allow the program to continue executing subsequent code while waiting for the completion of the previous operation. This prevents blocking and improves performance, especially in I/O-bound tasks like network requests or file operations.
// - **Event Loop and Callback Queue:** JavaScript handles asynchronous operations using the event loop. When an asynchronous operation is initiated (e.g., a network request), it is delegated to the browser's or Node.js's API. Once the operation completes, the callback function is placed in the callback queue, waiting to be executed once the call stack is empty.
// - **Example:**
//   ```javascript
//   console.log('Start');
//   setTimeout(() => {
//     console.log('Asynchronous operation completed');
//   }, 1000);
//   console.log('End');
//   ```

// ### Event Loop

// The event loop is a fundamental concept that enables asynchronous programming in JavaScript. It continually checks the call stack and the callback queue.

// 1. **Call Stack:** This is where the code is executed. Functions are pushed onto the stack when called and popped off when they return.
// 2. **Callback Queue:** This holds callback functions that are waiting to be executed. When the call stack is empty, the event loop pushes the next callback from the queue onto the call stack.

// ### Promises and Async/Await

// To handle asynchronous operations more elegantly, JavaScript provides Promises and the async/await syntax.

// **Promises:**

// - **Definition:** A Promise represents a value that may be available now, in the future, or never. It allows chaining asynchronous operations and handling errors gracefully.
// - **Example:**
//   ```javascript
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise resolved');
//     }, 1000);
//   });

//   promise.then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   });
//   ```

// **Async/Await:**

// - **Syntactic Sugar:** `async` and `await` provide a more synchronous-looking syntax for handling asynchronous operations, making code easier to read and maintain.
// - **Example:**
//   ```javascript
//   async function asyncFunction() {
//     console.log('Start');
//     let result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Async/Await resolved');
//       }, 1000);
//     });
//     console.log(result);
//     console.log('End');
//   }

//   asyncFunction();
//   ```

// ### Summary

// - **Single-Threaded:** JavaScript runs on a single main thread, executing code sequentially.
// - **Synchronous:** Operations are executed one after the other, potentially blocking subsequent code execution.
// - **Asynchronous:** Operations are executed without blocking, using the event loop to manage callbacks and improve performance.
// - **Event Loop:** Manages the execution of asynchronous operations, ensuring that callbacks are executed when the call stack is empty.
// - **Promises and Async/Await:** Modern constructs for handling asynchronous operations, providing more readable and maintainable code.

// These characteristics allow JavaScript to handle various tasks efficiently, from simple script execution to complex web applications.






// ### Promises in JavaScript

// **What is a Promise?**

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner and more powerful way to handle asynchronous code compared to traditional callbacks.

// **States of a Promise:**

// 1. **Pending:** The initial state, neither fulfilled nor rejected.
// 2. **Fulfilled:** The operation completed successfully.
// 3. **Rejected:** The operation failed.

// **Creating and Using Promises:**

// To create a Promise, you use the `Promise` constructor which takes a function with two arguments: `resolve` and `reject`.

// ```javascript
// let promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   setTimeout(() => {
//     let success = true; // Example condition
//     if (success) {
//       resolve('Operation successful');
//     } else {
//       reject('Operation failed');
//     }
//   }, 1000);
// });

// promise.then((result) => {
//   console.log(result); // 'Operation successful'
// }).catch((error) => {
//   console.log(error); // 'Operation failed'
// });
// ```

// **Chaining Promises:**

// Promises can be chained to perform a sequence of asynchronous operations.

// ```javascript
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// promise
//   .then((result) => {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(result); // 6
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// ```

// ### Async/Await in JavaScript

// **What are Async/Await?**

// `async` and `await` are syntactic sugar built on top of Promises. They make asynchronous code look and behave more like synchronous code, making it easier to read and write.

// **Using `async` and `await`:**

// - **`async` Keyword:** Declares an asynchronous function. It implicitly returns a Promise.
// - **`await` Keyword:** Pauses the execution of the async function, waiting for the Promise to resolve or reject.

// **Example:**

// ```javascript
// async function asyncFunction() {
//   try {
//     console.log('Start');
//     let result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Async/Await resolved');
//       }, 1000);
//     });
//     console.log(result); // 'Async/Await resolved'
//     console.log('End');
//   } catch (error) {
//     console.log(error);
//   }
// }

// asyncFunction();
// ```

// **Error Handling with Async/Await:**

// Errors in async functions can be caught using `try...catch` blocks.

// ```javascript
// async function asyncFunctionWithError() {
//   try {
//     let result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject('Something went wrong');
//       }, 1000);
//     });
//   } catch (error) {
//     console.log(error); // 'Something went wrong'
//   }
// }

// asyncFunctionWithError();
// ```

// **Chaining with Async/Await:**

// Just like with Promises, you can chain asynchronous operations using `async/await`.

// ```javascript
// async function fetchData() {
//   let data1 = await fetch('https://api.example.com/data1').then(response => response.json());
//   let data2 = await fetch(`https://api.example.com/data2/${data1.id}`).then(response => response.json());
//   return data2;
// }

// fetchData().then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });
// ```

// ### Summary

// - **Promises:**
//   - A way to handle asynchronous operations.
//   - Can be in one of three states: pending, fulfilled, or rejected.
//   - Provides `.then()` for chaining and `.catch()` for error handling.
  
// - **Async/Await:**
//   - Built on top of Promises.
//   - Makes asynchronous code look synchronous.
//   - Uses `async` to declare an asynchronous function and `await` to wait for a Promise.
//   - Simplifies error handling with `try...catch`.

// Both Promises and Async/Await are essential tools for managing asynchronous code in JavaScript, each providing unique advantages for different scenarios.