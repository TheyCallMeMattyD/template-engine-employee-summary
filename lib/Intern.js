// TODO: Write code to define and export the intern class.  HINT: This class should inherit from employee.
/* In addition to employee's properties and methods, intern will also have:
school
getSchool()
getRole() // Overridden to return 'intern' */

const employee = require("./employee");

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email); // calls parent class constructor
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'intern';
    }
}

module.exports = intern;