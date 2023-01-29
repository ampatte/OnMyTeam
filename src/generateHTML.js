function generateHTML(team) {
    console.log(team)

    const teamHTML = []

  const managers = team.filter((employee)=>employee.getRole() === "Manager")
  .map((manager)=> 
  `<div class="col card primary">        
        <div class="card-header"><h2>${manager.getRole()}</h2></div>
            <div class="card-body">
                <h2 class="display-4">${manager.name}</h2>
                    <ul class="list-group-flush">
                        <li class="list-group-item">ID Badge # ${manager.id}</li>
                    <a href="">${manager.email}</a>
                <li class="list-group-item">Office Phone: ${manager.office}</li>
            </ul>
        </div>
    </div>`)
    teamHTML.push(managers)
    console.log(managers)

  const engineers = team.filter((employee)=>employee.getRole() === "Engineer")
  .map((engineer)=> 
  `<div class="col card warning">
        <div class="card-header"><h2> ${engineer.getRole()}</h2></div>
            <div class="card-body">
                <h1 class="display-4">${engineer.name}</h1>
                    <ul class="list-group-flush">
                        <li class="list-group-item">ID Badge # ${engineer.id}</li>
                    <a href="${engineer.email}">${engineer.email}</a>
                <li class="list-group-item">Github Username: ${engineer.github}</li>
            </ul>
        </div>
    </div>`)
    teamHTML.push(engineers)
    console.log(engineers)

  const interns = team.filter((employee)=>employee.getRole() === "Intern")
  .map((intern)=> 
  `<div class="col card info">
        <div class="card-header"><h2>${intern.getRole()}</h2></div>
            <div class="card-body">
                <h1 class="display-4">${intern.name}</h1>
                    <ul class="list-group-flush">
                        <li class="list-group-item">ID badge # ${intern.id}</li>
                    <a href="${intern.email}">${intern.email}</a>
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
        <link rel="stylesheet" href="style.css">
        <title>OnMyTeam</title>
    </head>
    <body>
    <body>
        <header class="pb-3 mb-4 border-bottom">
            <nav class="nav navbar-fixed-top"> 
                <h3><strong>Team Profile Generator</strong><h3>
            </nav> 
        </header> 
        <div class="container-fluid" class="row align-items-center">   
            <div id="employees"></div>
             ${teamHTML.join("")}
        </div>
    </body>
    </html>`
}

module.exports= generateHTML