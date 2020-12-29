const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
const createQuestions = () =>
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "How would you describe your project?",
            name: "description"
        },
        {
            type: "input",
            message: "What packages are installed or need to be installed?",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you and other developers use this application?",
            name: "usage"
        },
        {
            type: "input",
            message: "Are there any licenses you'd like to include?",
            name: "license"
        },
        {
            type: "input",
            message: "Who contributed to this project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "Are there any tests included in this application?",
            name: "tests"
        },
        {
            type: "input",
            message: "Please provide a link to your GitHub.",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email, associated with your GitHub account?",
            name: "email"
        },


    ]);


// function to write README file
function writeToFile(fileName, data) {
    return fs.answers(fileName, data);
}

// function to initialize program
function init() {
    createQuestions()
        .then((answers) => writeToFile('generateMardown.js', generateMarkdown(answers)))
        .then(() => console.log('Successfully written to generateMarkdown.js'))
        .catch((err) => console.error(err));
}

// function call to initialize program
init();
writeToFile();
module.exports = index