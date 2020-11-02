// TODO: Write code to define and export the engineer class.  HINT: This class should inherit from employee.
/* In addition to employee's properties and methods, engineer will also have:
github  // GitHub username
getGithub()
getRole() // Overridden to return 'engineer' */

const employee = require("./employee");

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email); // calls parent class constructor
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'engineer';
    }
}

module.exports = engineer;