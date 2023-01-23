const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test("It should return office number property", () => {
    const testExample = 222;
    const man = new Manager("Steve", 5745, "stevie@test.com", testExample );
    expect(man.officeNum).toBe(testExample);
})

test("It should instantiate the class of Manager", () => {
    const testExample = 222;
    const man = new Manager("Steve", 5745, "stevie@test.com", testExample );
    expect(man.getOffice()).toBe(testExample);
})

test("getRole() should return role of 'Manager' ", () => {
    const testExample = "Manager";
    const role = new Manager("Steve", 5745, "stevie@test.com", testExample );
    expect(role.getRole()).toBe(testExample);
})