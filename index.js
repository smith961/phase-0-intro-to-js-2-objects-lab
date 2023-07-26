// Write your solution in this file!
const  employee = {
        name: "Hakeem" ,
        streetAddress: "Alagbede Court Off Oshodi"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    let updateEmployee = {...employee};
    updateEmployee.name = "Sam";
    updateEmployee.streetAddress = "11 Broadway"

return updateEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    let updateEmployee = {...employee}
    delete updateEmployee.name
    
    return updateEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    
    return employee
}