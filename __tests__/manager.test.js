const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');



test("it should instantiate the class of Manager", () => {
    const testExample = "Manager";
    const man = new Manager("Steve", 5745, "stevie@test.com", 222, testExample );
    expect(man.getRole()).toBe(testExample);
})

test("it should return office number property", () => {
    const testExample = 222;
    const man = new Manager("Steve", 5745, "stevie@test.com", testExample, "Manager");
    expect(man.officeNum).toBe(testExample);
})

test("getOffice() should return office number", () => {
    const testExample = 222;
    const man = new Manager("Steve", 5745, "stevie@test.com", testExample, "Manager");
    expect(man.getOffice()).toBe(testExample);
})

test("getRole() should return role of 'Manager' ", () => {
    const testExample = "Manager";
    const role = new Manager("Steve", 5745, "stevie@test.com", 222, testExample );
    expect(role.getRole()).toBe(testExample);
})