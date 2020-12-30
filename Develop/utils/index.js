const inquirer = require('inquirer');
const fs = require('fs');

// Questions for User
let questions = [
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
    name: "installation",
    default: "No additional packages are needed to install"
  },
  {
    type: "input",
    message: "How would you and other developers use this application?",
    name: "usage"
  },
  {
    type: "input",
    message: "Are there any licenses you'd like to include?",
    name: "license",
    default: "No licenses to include"
  },
  {
    type: "input",
    message: "Who contributed to this project?",
    name: "contribution",
    default: "No additional contributions"
  },
  {
    type: "input",
    message: "Are there any tests included in this application?",
    name: "tests",
    default: "No tests included in this application"
  },
  {
    type: "input",
    message: "Please provide a link to your GitHub.",
    name: "github",
    default: "I don't have a github"
  },
  {
    type: "input",
    message: "What is the email address associated with your GitHub account?",
    name: "email",
    default: "I do not have an email",
  },
]
// Function and Template to generate a README.md file
let createMd = (title, description, installation, usage, license, contribution, tests, github, email) => {
  return `# ${title} 
  ## Table of Contents
  ## 1. Description
  ### 2. Installation
  ### 3. Usage
  ### 4. License
  ### 5. Contribution
  ### 6. Tests
  ### 7. Questions

  ##  Description
  ### ${description}
        
  ## Installation
  ### ${installation}
        
  ## Usage
  ### ${usage}
        
  ## License 
  ### ${license}
        
  ## Contributions
  ### ${contribution}
        
  ## Tests
  ### ${tests}
        
  ## Questions
  ### ${email}
  ### ${github}
        `;
}

inquirer
  .prompt(questions)
  .then(answers => {
    // Destructure object of questions
    const { title, description, installation, usage, license, contribution, tests, github, email } = answers;
    // Calling createMd function and passing arguments
    const template = createMd(title, description, installation, usage, license, contribution, tests, github, email);
    // Writes readme.md file
    fs.writeFile('README.md', template, (err) => {
      if (err) throw err;
      console.log('file has been saved');
    });
  });