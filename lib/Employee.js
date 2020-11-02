// TODO: Write code to define and export the employee class
/* The first class is an employee parent class with the following properties and
methods:
name
id
email
getName()
getId()
getEmail()
getRole() // Returns 'employee'
The other three classes will extend employee.*/

class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'employee';
    }
}

module.exports = employee;