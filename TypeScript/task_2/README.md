# Task 5, 6 & 7: Advanced Types (Interfaces, Classes, Type Predicates, and String Literal Types)

This project is part of the Holberton School TypeScript curriculum. It covers advanced TypeScript concepts including interface implementation, union types, factory functions, type predicates (narrowing), dynamic task execution, and string literal types.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files end with a new line.
- Code is transpiled on Ubuntu 18.04 using Webpack and TypeScript.
- TypeScript compiler should not show any warnings or errors when compiling.

## Tasks Overview

### Task 5: Advanced Types Part 1
- **Interfaces**: Created `DirectorInterface` and `TeacherInterface` with specific methods (`workFromHome`, `getCoffeeBreak`, and task methods).
- **Classes**: Implemented `Director` and `Teacher` classes adhering to their interfaces.
- **Factory Function**: Created `createEmployee` to return either a `Teacher` or a `Director` based on salary thresholds.

### Task 6: Creating Functions Specific to Employees
- **Type Predicate**: Created `isDirector` function to check and narrow down if an employee instance is a `Director`.
- **Task Execution**: Created `executeWork` function to dynamically call `workDirectorTasks()` or `workTeacherTasks()` depending on the employee type.

### Task 7: String Literal Types
- **String Literal Type**: Created a `Subjects` type restricted strictly to `"Math"` or `"History"`.
- **Class Teaching Function**: Created `teachClass` function to accept a `Subjects` argument and return the appropriate teaching message.

## Files Description

- **`js/main.ts`**: Contains all TypeScript code for interfaces, classes, employee creation, type predicates, task execution, and string literal types.
- **`tsconfig.json`**: TypeScript compiler options.
- **`webpack.config.js`**: Webpack configuration file.
- **`package.json`**: Dependencies and build scripts.

## How to Run

1. Install project dependencies:
   ```bash
   npm install
