"use strict";

class  Person {
    constructor(firstName, lastName, age, birthDayDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }

    celebrate() {
        return `"Happy Birthday, let's celebrate"`;
    }
}

class Employee extends Person {
    #salary = 0;
    constructor(firstName, lastName, age, birthDayDate, salary, jobPosition){
        super(firstName, lastName, age, birthDayDate);
        this.#salary = salary;
        this.jobPosition = jobPosition;
    }

    celebrate() {
        const celebrationMessage = super.celebrate();
        const newBirthDayDate = new Date(this.birthDayDate);
        const newDate = new Date();

        newBirthDayDate.setFullYear(newDate.getFullYear());
        const day = newBirthDayDate.getDay();
        if (day === 0 || day === 6) {
        return `${celebrationMessage}`
        } else
        return `"Happy Birthday, but I need to work"`
    }

    getYearSalary() {
        return this.#salary * 12;
    }
}

const person = new Person("Ivan", "Ivanov", 23, "1989-02-03");
const employee = new Employee("Ivan", "Ivanov", 23,"1989-02-03", 800, "welder");
console.log(person);
console.log(employee);
console.log(person.celebrate());
console.log(employee.celebrate());
console.log(employee.getYearSalary());

