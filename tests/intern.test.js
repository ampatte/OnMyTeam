const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

test("It should return school name property", () => {
    const testExample = "School";
    const intern = new Intern("Steve", 5725, "stevie@test.com", testExample );
    expect(intern.getSchool()).toBe(testExample);
}
)

test("It should instantiate the class of Intern", () => {
    const testExample = "Stev222";
    const intern = new Intern("Steve", 5725, "stevie@test.com", testExample );
    expect(intern.school).toBe(testExample);
}
)


test("getRole() should return role of 'Intern' ", () => {
    const testExample = "Intern";
    const role = new Intern("Steve", 5725, "stevie@test.com", testExample );
    expect(role.getRole()).toBe(testExample);
})