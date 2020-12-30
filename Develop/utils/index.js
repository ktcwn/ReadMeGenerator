const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');
const answers = [];
const writeFileAsync = util.promisify(fs.writeFile);

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

function generateReadMe(answers) {
  return `# ${answers.title}
      ## Table of Contents
        ### ${createQuestions}
    
      ##  Description
        ###  ${answers.description}
      
      ## Installation
        ### ${answers.installation}
      
      ## Useage
        ### ${answers.usage}
      
      ## License 
        ### ${answers.license}
      
      ## Contributions
        ### ${answers.contribution}
      
      ## Tests
        ### ${answers.tests}
      
      ## Questions
        ### ${answers.github, answers.email}
      
    `;
}

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
createQuestions()
  .then((answers) => writeFileAsync('../README.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully written to ../README.md'))
  .catch((err) => console.error(err));

// function call to initialize program
writeToFile();
generateReadMe();
module.exports = index