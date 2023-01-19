const Employee = require ('./employee')

class Manager extends Employee {

constructor(name, id, email, office) {
    this.office = office;
    
    super(name, id, email);
}

    getOffice(){
        return this.office = office;
        }


    getRole() {return 'Manager';
    }
}