# Task 1 to 4: Advanced TypeScript Interfaces, Functions, and Classes

This project is part of the Holberton School TypeScript curriculum. It covers creating interfaces, inheritance using `extends`, function typing, and implementing classes with TypeScript interfaces.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files end with a new line.
- Code is transpiled on Ubuntu 18.04 using Webpack and TypeScript.
- TypeScript compiler should not show any warnings or errors when compiling.

## Tasks Overview

### Task 1: `Teacher` Interface
- Created a `Teacher` interface with `readonly` properties (`firstName`, `lastName`).
- Added mandatory properties (`fullTimeEmployee`, `location`) and optional property (`yearsOfExperience`).
- Supported dynamic key-value properties using index signatures `[key: string]: any`.

### Task 2: `Directors` Interface Extension
- Created a `Directors` interface that extends the `Teacher` interface.
- Added a required attribute `numberOfReports` of type `number`.

### Task 3: Printing Teachers Function
- Created a `printTeacherFunction` interface for function typing.
- Implemented `printTeacher` function that returns the first letter of the first name and the full last name (e.g., `J. Doe`).

### Task 4: Writing a Class (`StudentClass`)
- Created `StudentConstructor` and `StudentInterface` interfaces to describe the class constructor and its structure.
- Implemented `StudentClass` with `workOnHomework` and `displayName` methods.

## Files Description

- **`js/main.ts`**: Contains all TypeScript code covering interfaces, inheritance, functions, and classes.
- **`tsconfig.json`**: TypeScript compiler options.
- **`webpack.config.js`**: Webpack configuration file.
- **`package.json`**: Dependencies and build scripts.

## How to Run

1. Install project dependencies:
   ```bash
   npm install
