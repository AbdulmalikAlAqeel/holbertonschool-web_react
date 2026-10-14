/**
 * Interface for Director.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface for Teacher.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Director class implementing DirectorInterface.
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
  * Teacher class implementing TeacherInterface.
  */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/**
 * Function to create an employee based on salary.
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example usage:
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee("$500")); // Director

/**
 * Type predicate function to check if an employee is a Director.
 */
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

/**
 * Function to execute specific tasks based on the employee type.
 */
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Example usage:
executeWork(createEmployee(200));   // Should print: Getting to work
executeWork(createEmployee(1000));  // Should print: Getting to director tasks

/**
 * String literal type representing valid subjects.
 */
type Subjects = "Math" | "History";

/**
 * Function that returns a teaching message based on the subject passed.
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Example usage:
console.log(teachClass('Math'));    // Should print: Teaching Math
console.log(teachClass('History')); // Should print: Teaching History
