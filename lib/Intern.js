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