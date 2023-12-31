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
        message: 'Please provide a short description for this project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators, any third-party assets that require attribution, creators with links to their primary web presence, and tutorials used.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Please enter your specific repository name for ReadMe file.'
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
            'Unlicensed'
        ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any written tests for your application'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error("Error writing to " + fileName + ": " + err);
        } else {
            console.log(fileName + " has been created.");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then(answers => {
            const readmeContent = `# ${answers.title}

![GitHub](https://img.shields.io/github/license/${answers.username}/${answers.repository})

## Description

${answers.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.name}

## License

[${answers.license}](LICENSE)

## Badges

![Languages](https://img.shields.io/github/languages/top/${answers.username}/${answers.repository})

## Tests

${answers.tests}

## Questions

For more information, check out my page: [Github](https://github.com/${answers.username})

For additional questions, please reach me at my email: ${answers.email}`;

            writeToFile('README.md', readmeContent);
        });

}

// Function call to initialize app
init();
