// Write your solution in this file!
const employee = {
    name: ""
} 

employee.name = 'Sam';

console.log(employee);

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

// console.log(updateEmployeeWithKeyAndValue(employee, "address", "11 Broadway"));

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "address", "12 Broadway"))

const deleteFromEmployeeByKey = (employee, key) => {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

//console.log(deleteFromEmployeeByKey(employee, "name"));

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));