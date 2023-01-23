const Employee = require('../lib/Employee')

test("it should return employee name property", () => {
    const testExample = "Steve";
    const emp = new Employee(testExample, 5745, "stevie@test.com", "Employee" )
    expect(emp.name).toBe(testExample);
})

test("it should return employee id property", () => {
    const testExample = 5745;
    const emp = new Employee("Steve", testExample, "stevie@test.com", "Employee")
    expect(emp.id).toBe(testExample);
})

test("it should return employee email property", () => {
    const testExample = "stevie@test.com";
    const emp = new Employee("Steve", 5745, testExample, "Employee")
    expect(emp.email).toBe(testExample);
})

test("getName() should return employee name", () => {
    const testExample = "Steve";
    const name = new Employee(testExample , 5745, "stevie@test.com", "Employee")
    expect(name.getName()).toBe(testExample);
})

test("getId() should return employee id", () => {
    const testExample = 5745;
    const id = new Employee("Steve", testExample, "stevie@test.com", "Employee")
    expect(id.getId()).toBe(testExample);
})

test("getEmail() should return employee email", () => {
    const testExample = "stevie@test.com";
    const emp = new Employee("Steve", 5745, testExample, "Employee");
    expect(emp.getEmail()).toBe(testExample);
})

test("getRole() should return emp of 'Employee' ", () => {
    const testExample = "Employee";
    const role = new Employee("Steve", 5745, "stevie@test.com", testExample );
    expect(role.getRole()).toBe(testExample);
})