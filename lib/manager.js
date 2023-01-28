const Employee = require ('./Employee')

class Manager extends Employee {

    constructor(name, idNum, email, office) {
    super(name, idNum, email);
    
    this.office = office;
    }

    getOffice(){
        return this.office;
        }

    getRole() {return 'Manager';
    }
}

module.exports = Manager;