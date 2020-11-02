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