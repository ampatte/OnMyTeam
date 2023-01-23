const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

test("it should instantiate the class of Intern", () => {
    const testExample = "Intern";
    const intern = new Intern("Steve", 5725, "stevie@test.com", "School", testExample );
    expect(intern.getRole()).toBe(testExample);
})

test("it should return school name property", () => {
    const testExample = "School";
    const intern = new Intern("Steve", 5725, "stevie@test.com", testExample, "Intern");
    expect(intern.getSchool()).toBe(testExample);
})

test("getSchool() should return school name", () => {
    const testExample = "School";
    const intern = new Intern("Steve", 5725, "stevie@test.com", testExample, "Intern");
    expect(intern.getSchool()).toBe(testExample);
})

test("getRole() should return role of 'Intern' ", () => {
    const testExample = "Intern";
    const role = new Intern("Steve", 5725, "stevie@test.com","School", testExample);
    expect(role.getRole()).toBe(testExample);
})