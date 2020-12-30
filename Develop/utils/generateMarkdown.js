const questions = require("/Users/katelynncowan/Desktop/Bootcamp/UTA-AUS-FSF-PT-10-2020-U-C/Homework/ReadMeGenerator/Develop/index.js")
const inquirer = require('inquirer');
const fs = require('fs');


console.log(questions);
// function to generate markdown for README
function generateMarkdown(data) {
  inquirer.prompt
  return `# ${name.title}
  ## Table of Contents
    ### ${createQuestions}

  ##  Description
    ###  ${data.description}
  
  ## Installation
    ### ${data.installation}
  
  ## Useage
    ### ${data.usage}
  
  ## License 
    ### ${data.license}
  
  ## Contributions
    ### ${data.contribution}
  
  ## Tests
    ### ${data.tests}
  
  ## Questions
    ### ${data.github, data.email}
  
`;
}

module.exports = generateMarkdown;
