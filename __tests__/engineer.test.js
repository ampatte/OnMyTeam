const Engineer = require('../lib/Engineer')

test("it should instantiate the class of Engineer", () => {
    const testExample = "Engineer";
    const eng = new Engineer("Steve", 5735, "stevie@test.com", "Steve222", testExample);
    expect(eng.getRole()).toBe(testExample);
})

test("it should retun the github property", () => {
    const testExample = "Stev222";
    const eng = new Engineer("Steve", 5735, "stevie@test.com", testExample, "Engineer");
    expect(eng.github).toBe(testExample);
})

test("it should return Github username", () => {
    const testExample = "Stev222";
    const eng = new Engineer("Steve", 5735, "stevie@test.com", testExample, "Engineer");
    expect(eng.getGithub()).toBe(testExample);
})

test("getRole() should return role of 'Engineer' ", () => {
    const testExample = "Engineer";
    const role = new Engineer("Steve", 5735, "stevie@test.com", "Steve222", testExample);
    expect(role.getRole()).toBe(testExample);
})