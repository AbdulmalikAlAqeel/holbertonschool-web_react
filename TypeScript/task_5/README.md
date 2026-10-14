# Task 10: Brand Convention & Nominal Typing

This project is part of the Holberton School TypeScript curriculum. It covers the concept of Nominal Typing using brand properties (Branding technique) to uniquely identify interfaces that share structural shapes.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files end with a new line.
- Code is transpiled on Ubuntu 18.04 using Webpack and TypeScript.
- TypeScript compiler should not show any warnings or errors when compiling.

## Task Overview

- **`MajorCredits` Interface**: Defined with a `credits` property (`number`) and a unique brand property (`__majorBrand?: void`).
- **`MinorCredits` Interface**: Defined with a `credits` property (`number`) and a unique brand property (`__minorBrand?: void`).
- **`sumMajorCredits` Function**: Sums the credits of two `MajorCredits` subjects and returns a `MajorCredits` type.
- **`sumMinorCredits` Function**: Sums the credits of two `MinorCredits` subjects and returns a `MinorCredits` type.

## Files Description

- **`js/main.ts`**: Contains the TypeScript code for `MajorCredits`, `MinorCredits`, `sumMajorCredits`, and `sumMinorCredits`.
- **`tsconfig.json`**: TypeScript compiler options.
- **`webpack.config.js`**: Webpack configuration file.
- **`package.json`**: Dependencies and build scripts.

## How to Run

1. Install project dependencies:
   ```bash
   npm install
