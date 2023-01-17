const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({name, ID, email, github})


inquirer
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'ID',
        message: 'What is your ID number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'phone',
        message: 'What is your office number?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter your school name.',
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
    