function generateHTML(team) {
    console.log(team)

    const teamHTML = []

  const managers = team.filter((employee)=>employee.getRole() === "Manager")
  .map((manager)=> 
  `<div class="col card text-bg-primary mb-3">
        <div class="card-body">
            <h1 class="display-4">${manager.getRole()}</h1>
                <div class="card-header">${manager.name}</div>
                    <ul class="list-group-flush">
                    <li class="list-group-item">ID badge # ${manager.idNum}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office phone: ${manager.office}</li>
        </ul>
    </div>`)
    teamHTML.push(managers)
    console.log(managers)

  const engineers = team.filter((employee)=>employee.getRole() === "Engineer")
  .map((engineer)=> 
  `<div class="col card text-bg-warning mb-3">
        <div class="card-body">
            <h1 class="display-4">${engineer.getRole()}</h1>
                <div class="card-header"> ${engineer.name}</div>
                    <ul class="list-group-flush">
                    <li class="list-group-item">ID badge # ${engineer.idNum}</li>
                <a href="#" class="card-link> ${engineer.email}</a>
            <li class="list-group-item">github username: ${engineer.github}</li>
        </ul>
    </div>`)
    teamHTML.push(engineers)
    console.log(engineers)

  const interns = team.filter((employee)=>employee.getRole() === "Intern")
  .map((intern)=> 
  `<div class="col>
        <div class="card-body">
            <h1 class="display-4">${intern.getRole()}</h1>
                <div class="card-header">${intern.name}</div>
                    <ul class="list-group-flush">
                    <li class="list-group-item">ID badge # ${intern.idNum}</li>
                <a href="#" class="card-link">${intern.email}</a>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
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
        <div class="container-fluid"> 
            <div class="row align-items-center" id="employees">       
                ${teamHTML.join("")}
            </div>
        </div>
    </body>
    </html>`
}

module.exports= generateHTML