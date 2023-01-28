const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');
const outputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDir, "team.html"); 
const team =[];



const managerInfo = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the manager name?',
      },
      {
        type: 'input',
        name: 'idNum',
        message: 'What is the manager ID number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the manager email address?',
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is the office number?',
      }, 
    ]

const engineerInfo = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer name?',
                
      },
      {
        type: 'input',
        name: 'idNum', 
        message: 'What is the engineer ID number?',
               
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the engineer email address?',
                
      }, 
      {
        type: 'input',
        name: 'github',
        message: 'Enter the engineer GitHub Username',
        
      },   
    ]

const internInfo = [
   {
       type: 'input',
       name: 'name',
       message: 'What is the intern name?',
       
     },
     {
       type: 'input',
       name: 'idNum',
       message: 'What is the intern ID number?',
       
     },
     {
       type: 'input',
       name: 'email',
       message: 'What is the intern email address?',
     },
     {
       type: 'input',
       name: 'school',
       message: 'Enter the school name.',
     },
    ]

const menu = [
    {
        type: 'list',
        name: 'employee',
        message: 'What employee role would you like to add?',
        choices: ['Engineer','Intern', 'none'],
        },
    ]

function manager() {
    return inquirer.prompt(managerInfo)
     .then((input) => {
        const manager = new Manager(input.name, input.idNum, input.email, input.office);
        team.push(manager);
         console.log(input) 
         runMenu();
    });
}

function runMenu() {
    return inquirer.prompt(menu)
     .then((input) => {console.log(input)
        if(input.employee === 'Engineer') {
            engineer();
        }
          else if(input.employee === 'Intern') {
                intern();
        } 
          else{
           buildTeam()
            //console.log("Team Profile Generated!")
          }

     }); 
}

function engineer() {
    return inquirer.prompt(engineerInfo)
     .then((input) => {
        const engineer = new Engineer(input.name, input.idNum, input.email, input.github);
        team.push(engineer);
         console.log(input)
         runMenu()
     });
}

function intern() {
    return inquirer.prompt(internInfo)
     .then((input) => {
        const intern = new Intern(input.name, input.idNum, input.email, input.school);
        team.push(intern);
         console.log(input)
         runMenu()
     });
}

 // call Manager Function to initialize app
manager();

 
function buildTeam(){
  console.log("buildTeam")
    
        fs.writeFile(outputPath ,generateHTML(team),(err)=>{
           err ?console.log(err) : console.log("Team Profile Generated!")
    })
    }
        