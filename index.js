// Write your solution in this file!
const employee = {
    name: "Oscar",
    streetAddress : "12 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
  return{
      ...employee,
      [key]: value
  }  
}
console.log(updateEmployeeWithKeyAndValue(employee, "name", "ERICK"), employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
console.log(employee);
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Otieno"));

function deleteFromEmployeeByKey(employee, key) {
  const cloneEmployee = {...employee};
  delete cloneEmployee[key]; 
  return cloneEmployee; 
}


//console.log(employee);
console.log(deleteFromEmployeeByKey(employee, "streetAddress"), employee);

function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
};

console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"), employee);


