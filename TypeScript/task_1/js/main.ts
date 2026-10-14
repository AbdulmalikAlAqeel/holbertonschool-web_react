/**
 * Interface defining the structure of a Teacher object.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/**
 * Interface Directors that extends Teacher with an additional property.
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

/**
 * Creating a teacher object conforming to the Teacher interface.
 */
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

/**
 * Creating a director object conforming to the Directors interface.
 */
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

/**
 * Interface representing the structure of the printTeacher function.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Implementation of the printTeacher function.
 * It returns the first letter of the first name and the full last name.
 */
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage:
console.log(printTeacher("John", "Doe")); // Should print: J. Doe

/**
 * Interface describing the constructor of StudentClass.
 */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

/**
 * Interface describing the methods and properties of StudentClass.
 */
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/**
 * StudentClass implementation adhering to StudentInterface.
 */
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const studentObj = new StudentClass("Ahmad", "Ali");
console.log(studentObj.displayName()); // Should print: Ahmad
console.log(studentObj.workOnHomework()); // Should print: Currently working
