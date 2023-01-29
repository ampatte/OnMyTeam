function generateHTML(team) {
    console.log(team)

    const teamHTML = []

  const managers = team.filter((employee)=>employee.getRole() === "Manager")
  .map((manager)=> 
  `<div class="col card">        
        <div class="card-header manager"><h2>${manager.getRole()}</h2>            
            <h1 class="display-4">${manager.name}</h1></div>
                <div class="card-body">
                    <ul class="list-group-flush">
                        <li class="list-group-item">ID: ${manager.id}</li>
                    <a class="link" href="#">Email: ${manager.email}</a>
                <li class="list-group-item">Office number: ${manager.office}</li>
            </ul>
        </div>
    </div>`)
    teamHTML.push(managers)
    console.log(managers)

  const engineers = team.filter((employee)=>employee.getRole() === "Engineer")
  .map((engineer)=> 
  `<div class="col card">
        <div class="card-header engineer"><h2> ${engineer.getRole()}</h2>            
            <h1 class="display-4">${engineer.name}</h1></div>
                <div class="card-body">
                    <ul class="list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                    <a class="link" href="#">Email: ${engineer.email}</a>
                <li class="list-group-item">Github: ${engineer.github}</li>
            </ul>
        </div>
    </div>`)
    teamHTML.push(engineers)
    console.log(engineers)

  const interns = team.filter((employee)=>employee.getRole() === "Intern")
  .map((intern)=> 
  `<div class="col card">
        <div class="card-header intern"><h2> ${intern.getRole()} </h2>
            <h1 class="display-4">${intern.name}</h1></div>
                <div class="card-body">
                    <ul class="list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                    <a class="link" href="#">Email: ${intern.email}</a>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`)
    teamHTML.push(interns)
    console.log(interns)
    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>OnMyTeam</title>
    </head>
    <body>
    <body>
        <header class=" top pb-5 mb-4" class="header">
            <h1>Team Profile Generator<h1>
                </header> 
            <div class="container-fluid " class="row align-items-center">   
        <div id="employees">
                ${teamHTML.join("")}
            </div>
        </div>
    </body>
    </html>`
}

module.exports= generateHTML