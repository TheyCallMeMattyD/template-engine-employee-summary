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