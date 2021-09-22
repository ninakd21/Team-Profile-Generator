// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the team manager's name?(Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your team manager's name?");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'workID',
        message: "What is your team manager's ID? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your team manager's ID?");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instalattionInstructions',
        message: "What is your team member's email? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your team member's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'workID',
        message: "What is your team manager's office number? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your team manager's office number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ussageInformation',
        message: 'What is the Usage Information (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Usage Information!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license?',
        default: false
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to apply? (Check all that apply)',
        when: ({ confirmLicense }) => confirmLicense,
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    }
// TODO: Create a function to initialize app
function init() {
  // Prompt Inquirer questions
  const userResponses = inquirer.prompt(questions);
}

// Function call to initialize app
init();
