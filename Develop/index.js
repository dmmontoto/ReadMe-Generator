// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter project title.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for this project.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.'
    },
    {
        type: 'list',  
        name: 'license',
        message: 'Please select a license for your project:',
        choices: [
            'MIT',
            'Apache 2.0',
            'GNU GPL v3',
            'BSD 2-Clause',
            'BSD 3-Clause',
            'Boost Software',
            'CCZ v1',
            'EPL 2.0',
            'GNU AGP v3',
            'GNU GPL v2',
            'GNU LGP v2.1',
            'MPL 2.0',
            'The Unlicense'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
