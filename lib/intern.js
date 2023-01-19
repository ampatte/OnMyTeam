const Employee = require ('./employee')

class Intern {

    constructor(name, id, email, school) {
        this.school = school; 

        super(name, id, email);
    }
       
    getSchool(){
    return this.school
    }

    getRole()//`&mdash;returns 'Intern'
    }