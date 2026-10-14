# Task 8: Ambient Namespaces and Declaration Files

This project is part of the Holberton School TypeScript curriculum. It covers advanced TypeScript concepts including creating interfaces, working with plain JavaScript libraries, and writing ambient declaration files (`.d.ts`) to type third-party modules.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files end with a new line.
- Code is transpiled on Ubuntu 18.04 using Webpack and TypeScript.
- TypeScript compiler should not show any warnings or errors when compiling.

## Task Overview

- **`interface.ts`**: Created the `RowID` type (alias for `number`) and the `RowElement` interface containing `firstName`, `lastName`, and an optional `age?` property.
- **`crud.js`**: A plain JavaScript utility library handling database CRUD operations (`insertRow`, `updateRow`, `deleteRow`).
- **`crud.d.ts`**: An ambient declaration file that provides type definitions for the functions in `crud.js` using module declarations and imported types.
- **`main.ts`**: The main execution file importing types and the CRUD module, creating row elements, inserting them, generating IDs, updating rows, and deleting records.

## Files Description

- **`js/interface.ts`**: Type and interface definitions for rows.
- **`js/crud.js`**: Plain JavaScript CRUD library.
- **`js/crud.d.ts`**: Ambient TypeScript declaration file for `crud.js`.
- **`js/main.ts`**: Main TypeScript application script.
- **`tsconfig.json`**: TypeScript compiler options.
- **`webpack.config.js`**: Webpack configuration file.
- **`package.json`**: Dependencies and build scripts.

## How to Run

1. Install project dependencies:
   ```bash
   npm install
