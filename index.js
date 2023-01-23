const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Intern = require('../lib/intern')
const Engineer = require('../lib/engineer')
const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

const team =[];

const generateHTML = ({name, ID, email, github})

const Manager= [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team member name?',
      },
      {
        type: 'input',
        name: 'idNum',
        message: 'What is the team member ID number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the team member email address?',
      },
      {
        type: 'input',
        name: 'phone',
        message: 'What is the office number?',
      }, 
    ]

const Engineer= [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team member name?',
      },
      {
        type: 'input',
        name: 'idNum',
        message: 'What is the team member ID number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the team member email address?',
      }, 
      {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub Username',
      },   
    ]

const Intern= [
   {
       type: 'input',
       name: 'name',
       message: 'What is the team member name?',
     },
     {
       type: 'input',
       name: 'idNum',
       message: 'What is the team member ID number?',
     },
     {
       type: 'input',
       name: 'email',
       message: 'What is the team member email address?',
     },
     {
       type: 'input',
       name: 'school',
       message: 'Enter the school name.',
     },
    ]
const Menu = 
    {
        type: 'list',
        name: ['Engineer','Intern', 'Finish'],
        message: 'What team member role would you like to add?',
      },

    .then((userInput) => {
        
    console.log(userInput)
            
    const htmlContent = generateHTML(userInput)

        fs.writeFile('index.html', htmlContent,(err)=>
           err ?console.log(err) : console.log('index.html Completed!')
       )
})
function init() {
    return inquirer.prompt(Manager)
     .then((input) => {
        const manager = new Manager(input.name, input.idNum, input.email, input.office);
        team.push(manager);
         console.log(input);
         Menu();
     });

     return inquirer.prompt(Engineer)
     .then((userInput) => {
        const engineer = new Engineer(input.name, input.idNum, input.email, input.github);
        team.push(engineer);
         console.log(input); 
     });

     return inquirer.prompt(Intern)
     .then((userInput) => {
        const intern = new Intern(input.name, input.idNum, input.email, input.school);
        team.push(intern);
         console.log(input); 
     });
 }
 // Function call to initialize app
 init();