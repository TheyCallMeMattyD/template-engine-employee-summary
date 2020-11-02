const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const teamArray = [];

createNewEmployee();

function createNewEmployee() {
    // console.log(teamArray);
    inquirer.prompt([{
        type: "list",
        name: "new",
        message: "Do you want to create a new employee? If so, choose type.",
        choices: [
            "manager",
            "engineer",
            "intern",
            "No"
        ]
    }]).then(function(data) {
        if (data.new === "No") {
            writeFile();
        } else if (data.new === "manager") {
            createmanager();
        } else if (data.new === "engineer") {
            createengineer();
        } else {
            createintern();
        }
    });
}

function createmanager() {
    console.log("Creating manager");
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is the manager's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        }
    ]).then(function(data) {

        const employee = new manager(data.name, data.id, data.email, data.office);
        teamArray.push(employee);
        createNewEmployee();

    });
}

function createengineer() {
    console.log("Creating engineer");
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is the engineer's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        }
    ]).then(function(data) {

        const employee = new engineer(data.name, data.id, data.email, data.github);
        teamArray.push(employee);
        createNewEmployee();

    });
}

function createinter() {
    console.log("Creating intern");
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is the intern's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "Which school is the intern currently enrolled?"
        }
    ]).then(function(data) {

        const employee = new intern(data.name, data.id, data.email, data.school);
        teamArray.push(employee);
        createNewEmployee();

    });
}

function writeFile() {
    console.log("Creating File");

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
}