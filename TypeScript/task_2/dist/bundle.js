/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/**
 * Director class implementing DirectorInterface.
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
/**
  * Teacher class implementing TeacherInterface.
  */
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
/**
 * Function to create an employee based on salary.
 */
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// Example usage:
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director
/**
 * Type predicate function to check if an employee is a Director.
 */
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
/**
 * Function to execute specific tasks based on the employee type.
 */
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// Example usage:
executeWork(createEmployee(200)); // Should print: Getting to work
executeWork(createEmployee(1000)); // Should print: Getting to director tasks
/**
 * Function that returns a teaching message based on the subject passed.
 */
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    return "Teaching History";
}
// Example usage:
console.log(teachClass('Math')); // Should print: Teaching Math
console.log(teachClass('History')); // Should print: Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWtCQTs7R0FFRztBQUNIO0lBQUE7SUFZQSxDQUFDO0lBWEMsK0JBQVksR0FBWjtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDRSxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDRSxPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVEOztJQUVJO0FBQ0o7SUFBQTtJQVlBLENBQUM7SUFYQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUM3QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQzlDLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUN0QjtJQUNELE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUN4QixDQUFDO0FBRUQsaUJBQWlCO0FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRyxVQUFVO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxXQUFXO0FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBRWhEOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQUMsUUFBNEI7SUFDOUMsT0FBUSxRQUFxQixDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQztBQUNoRSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7S0FDM0M7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztLQUMxQztBQUNILENBQUM7QUFFRCxpQkFBaUI7QUFDakIsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUcsZ0NBQWdDO0FBQ3BFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLDBDQUEwQztBQU85RTs7R0FFRztBQUNILFNBQVMsVUFBVSxDQUFDLFVBQW9CO0lBQ3RDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUNELE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUVELGlCQUFpQjtBQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUksOEJBQThCO0FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIERpcmVjdG9yLlxuICovXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRlYWNoZXIuXG4gKi9cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEaXJlY3RvciBjbGFzcyBpbXBsZW1lbnRpbmcgRGlyZWN0b3JJbnRlcmZhY2UuXG4gKi9cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiO1xuICB9XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XG4gIH1cblxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcbiAgfVxufVxuXG4vKipcbiAgKiBUZWFjaGVyIGNsYXNzIGltcGxlbWVudGluZyBUZWFjaGVySW50ZXJmYWNlLlxuICAqL1xuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiO1xuICB9XG5cbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiO1xuICB9XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIGFuIGVtcGxveWVlIGJhc2VkIG9uIHNhbGFyeS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIiAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgfVxuICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTsgICAvLyBUZWFjaGVyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7ICAvLyBEaXJlY3RvclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoXCIkNTAwXCIpKTsgLy8gRGlyZWN0b3JcblxuLyoqXG4gKiBUeXBlIHByZWRpY2F0ZSBmdW5jdGlvbiB0byBjaGVjayBpZiBhbiBlbXBsb3llZSBpcyBhIERpcmVjdG9yLlxuICovXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gIHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3IpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gZXhlY3V0ZSBzcGVjaWZpYyB0YXNrcyBiYXNlZCBvbiB0aGUgZW1wbG95ZWUgdHlwZS5cbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHZvaWQge1xuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCkpO1xuICB9XG59XG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG5leGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKTsgICAvLyBTaG91bGQgcHJpbnQ6IEdldHRpbmcgdG8gd29ya1xuZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpOyAgLy8gU2hvdWxkIHByaW50OiBHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXG5cbi8qKlxuICogU3RyaW5nIGxpdGVyYWwgdHlwZSByZXByZXNlbnRpbmcgdmFsaWQgc3ViamVjdHMuXG4gKi9cbnR5cGUgU3ViamVjdHMgPSBcIk1hdGhcIiB8IFwiSGlzdG9yeVwiO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHRlYWNoaW5nIG1lc3NhZ2UgYmFzZWQgb24gdGhlIHN1YmplY3QgcGFzc2VkLlxuICovXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcbiAgaWYgKHRvZGF5Q2xhc3MgPT09IFwiTWF0aFwiKSB7XG4gICAgcmV0dXJuIFwiVGVhY2hpbmcgTWF0aFwiO1xuICB9XG4gIHJldHVybiBcIlRlYWNoaW5nIEhpc3RvcnlcIjtcbn1cblxuLy8gRXhhbXBsZSB1c2FnZTpcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7ICAgIC8vIFNob3VsZCBwcmludDogVGVhY2hpbmcgTWF0aFxuY29uc29sZS5sb2codGVhY2hDbGFzcygnSGlzdG9yeScpKTsgLy8gU2hvdWxkIHByaW50OiBUZWFjaGluZyBIaXN0b3J5XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=