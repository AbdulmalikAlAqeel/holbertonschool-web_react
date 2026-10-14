/**
 * Triple-slash directive to reference the ambient declarations file (crud.d.ts).
 */
/// <reference path="./crud.d.ts" />

/**
 * Importing types from the interface module.
 */
import { RowID, RowElement } from './interface';

/**
 * Importing all functions from the plain JavaScript crud.js module as CRUD.
 */
import * as CRUD from './crud';

/**
 * Creating a row object adhering to the RowElement interface.
 */
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

/**
 * Inserting the row into the database and storing the generated ID.
 */
const newRowID: RowID = CRUD.insertRow(row);

/**
 * Creating an updated row object that includes the age property.
 */
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

/**
 * Updating the row using the generated ID and the updated row data.
 */
CRUD.updateRow(newRowID, updatedRow);

/**
 * Deleting the row using its ID.
 */
CRUD.deleteRow(newRowID);
