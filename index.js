// Write your solution in this file!

const employee ={
    name: 'Jon',
   streetAddress:'11 Broadway' 
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
   const newObj = { ...obj };
    newObj[key] = value;
   return newObj;
    //return newObj.assign({ key: value });
  }
  const employeeNonDestructively = updateEmployeeWithKeyAndValue(employee, 'name', 'Tom');
  console.log(employeeNonDestructively)//Tom
  console.log(employee)
  
function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
    return obj;
  }
  const employeeDestructively = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
  console.log(employeeDestructively)//sam
  console.log(employee)//sam



  function deleteFromEmployeeByKey(obj, key){
    const deleteObj = { ...obj };
    delete deleteObj[key];
    return deleteObj;
  }
  const employeeDelete = deleteFromEmployeeByKey(employee, 'name');
  console.log(employeeDelete)//streetAddress: "11 Broadway"
  console.log(employee)//name: "Sam" ,streetAddress: "11 Broadway"

  function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
const employeeDelete1 = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(employeeDelete1)//streetAddress: "11 Broadway"
console.log(employee)//streetAddress: "11 Broadway"