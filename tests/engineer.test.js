const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')

test("It should return Github property", () => {
    const testExample = "Stev222";
    const eng = new Engineer("Steve", 5735, "stevie@test.com", testExample );
    expect(eng.getGithub()).toBe(testExample);
})

test("It should instantiate the class of Engineer", () => {
    const testExample = "Stev222";
    const eng = new Engineer("Steve", 5735, "stevie@test.com", testExample );
    expect(eng.github).toBe(testExample);
})

test("getRole() should return role of 'Engineer' ", () => {
    const testExample = "Engineer";
    const role = new Engineer("Steve", 5735, "stevie@test.com", testExample );
    expect(role.getRole()).toBe(testExample);
})