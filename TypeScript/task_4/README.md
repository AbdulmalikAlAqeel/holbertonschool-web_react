# Task 9: Namespaces and Declaration Merging

This project is part of the Holberton School TypeScript curriculum. It covers advanced TypeScript architecture concepts including Namespaces, Class Inheritance, and Declaration Merging to extend interfaces across multiple files.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files end with a new line.
- Code is transpiled on Ubuntu 18.04 using Webpack and TypeScript.
- TypeScript compiler should not show any warnings or errors when compiling.

## Task Overview

- **`Teacher.ts`**: Created the `Teacher` interface inside the `Subjects` namespace with `firstName` and `lastName`.
- **`Subject.ts`**: Created the base `Subject` class inside the `Subjects` namespace containing a `teacher` attribute and a `setTeacher` setter method.
- **`Cpp.ts`**: 
  - Used Declaration Merging to add an optional `experienceTeachingC` (`number`) attribute to the `Teacher` interface.
  - Created a `Cpp` class extending `Subject` with `getRequirements()` and `getAvailableTeacher()` methods.
- **`React.ts`**: 
  - Used Declaration Merging to add an optional `experienceTeachingReact` (`number`) attribute to the `Teacher` interface.
  - Created a `React` class extending `Subject` with specific requirement and availability logic.
- **`Java.ts`**: 
  - Used Declaration Merging to add an optional `experienceTeachingJava` (`number`) attribute to the `Teacher` interface.
  - Created a `Java` class extending `Subject` with specific requirement and availability logic.

## Files Description

- **`js/subjects/Teacher.ts`**: Teacher interface definition inside `Subjects` namespace.
- **`js/subjects/Subject.ts`**: Base Subject class.
- **`js/subjects/Cpp.ts`**: Cpp subject class and Teacher interface extension.
- **`js/subjects/React.ts`**: React subject class and Teacher interface extension.
- **`js/subjects/Java.ts`**: Java subject class and Teacher interface extension.
- **`tsconfig.json`**: TypeScript compiler options.
- **`webpack.config.js`**: Webpack configuration file.
- **`package.json`**: Dependencies and build scripts.

## How to Run

1. Install project dependencies:
   ```bash
   npm install
