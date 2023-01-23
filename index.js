const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('../lib/intern')
const Engineer = require('../lib/engineer')
const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

const generateHTML = ({name, ID, email, github})

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>OnMyTeam</title>
</head>
<body>
    <div class=" jumbotron jumbotron-fluid">
        <div class="row">
            
            <div class=" card manager">
                <h1 class="display-4">${name}</h1>
                    <p class="lead">${Manager}.</p>
                        <ul class="list-group">
                            <li class="list-group-item">ID # ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">Office: ${office}</li>
                </ul>
            </div>

            <div class=" card engineer">
                <h1 class="display-4">${name}</h1>
                    <p class="lead">${Engineer}.</p>
                        <ul class="list-group">
                            <li class="list-group-item">ID # ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">My GitHub username is ${github}</li>
                </ul>
            </div>

            <div class=" card intern">
                <h1 class="display-4">${name}</h1>
                    <p class="lead">${Intern}.</p>
                        <ul class="list-group">
                            <li class="list-group-item">${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>

        </div>
    </div>
</body>
</html>`

inquirer
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
      },
      {
        type: 'input',
        name: 'ID',
        message: 'What is the employee ID number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email address?',
      },
      {
        type: 'input',
        name: 'phone',
        message: 'What is the office number?',
      },
      {
        type: 'list',
        name: ['Engineer','Intern', 'Finish'],
        message: 'What type of employee would you like to add?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub Username',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter the school name.',
      },
]

inquirer.prompt(questions)
    .then((userInput) => {
    console.log(userInput)
            
    const htmlContent = generateHTML(userInput)

        fs.writeFile('index.html', htmlContent,(err)=>
           err ?console.log(err) : console.log('index.html Completed!')
       )
})
    