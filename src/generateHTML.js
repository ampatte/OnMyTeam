function generateHTML(input) {
    return (input)
  
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
                <h1 class="display-4">${ new Manager(input.name)}</h1>
                    <p class="lead">${Manager}.</p>
                        <ul class="list-group">
                            <li class="list-group-item">ID # ${new Manager(input.idNum)}</li>
                        <li class="list-group-item">Email: ${new Manager(input.email)}</li>
                    <li class="list-group-item">Office: ${new Manager(input.office)}</li>
                </ul>
            </div>

            <div class=" card engineer">
                <h1 class="display-4">${new Engineer(input.idNum)}</h1>
                    <p class="lead">${Engineer}.</p>
                        <ul class="list-group">
                            <li class="list-group-item">ID # ${new Engineer(input.idNum)}</li>
                        <li class="list-group-item">Email: ${new Engineer(input.email)}</li>
                    <li class="list-group-item">My GitHub username is ${new Engineer(input.github)}</li>
                </ul>
            </div>

            <div class=" card intern">
                <h1 class="display-4">${new Intern(input.name)}</h1>
                    <p class="lead">${Intern}.</p>
                        <ul class="list-group">
                            <li class="list-group-item">${new Intern(input.idNum)}</li>
                        <li class="list-group-item">Email: ${new Manager(input.email)}</li>
                    <li class="list-group-item">School: ${new Intern(input.school)}</li>
                </ul>
            </div>

        </div>
    </div>
</body>
</html>`
}
