// TODO: Write code to define and export the manager class. HINT: This class should inherit from employee.
/* In addition to employee's properties and methods, manager will also have:
officeNumber
getRole() // Overridden to return 'manager' */

const employee = require("./employee");

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); // calls parent class constructor
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'manager';
    }
}

module.exports = manager;