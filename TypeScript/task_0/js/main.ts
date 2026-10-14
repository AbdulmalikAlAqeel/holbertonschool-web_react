/**
 * Interface defining the structure of a Student object.
 */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * Creating two student instances adhering to the Student interface.
 */
const student1: Student = {
  firstName: "Ahmad",
  lastName: "Ali",
  age: 22,
  location: "Riyadh",
};

const student2: Student = {
  firstName: "Sara",
  lastName: "Mohammed",
  age: 24,
  location: "Jeddah",
};

/**
 * Array containing the student instances.
 */
const studentsList: Student[] = [student1, student2];

/**
 * Render a table using Vanilla JavaScript to display each student's first name and location.
 */
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
