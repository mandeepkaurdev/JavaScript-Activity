
const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];



//1.

const input = prompt('enter a command');
if (input.toLowerCase() === 'print'){
for (let i = 0; i < employeeList.length; i++){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
    render('-------');
  }
}



//2.

else if (input.toLowerCase() === 'verify'){
const input = prompt('enter an employee name');
let message = "false";
for (let i = 0; i < employeeList.length; i++){
if (input === employeeList[i].name){
     message = "true";
    }
  }
    render(message);
}



//3.

else if (input.toLowerCase() === 'lookup'){
const input = prompt('enter an employee name');
for (let i = 0; i < employeeList.length; i++){
if (input == employeeList[i].name){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
     }
   }
}



//4.

else if (input.toLowerCase() === 'contains'){
const input = prompt('enter a string');
for (let i = 0; i < employeeList.length; i++){
if (employeeList[i].name.includes(input)){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
    }
  }
}



//5.

else if (input.toLowerCase() === 'update'){
const updateEmployee = prompt('enter an employee');
const updateField = prompt('enter a field');
const updateValue = prompt('enter a value');  
for (let i = 0; i < employeeList.length; i++){
if (employeeList[i].name === updateEmployee) {
    employeeList[i][updateField] = updateValue;
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
    }
  }
}



//6.

else if (input.toLowerCase() === 'add'){
const employeeName = prompt('enter a new employee');
const officeNum = prompt('enter a office number');
const telephoneNum = prompt('enter a telephone number');
employeeList.push({name: employeeName, officeNum: officeNum, phoneNum: telephoneNum});
for (i = 0; i < employeeList.length; i++) {
  render(employeeList[i].name);
  render(employeeList[i].officeNum);
  render(employeeList[i].phoneNum);
}
}



//7.

else if (input.toLowerCase() === 'delete'){
const input = prompt('delete an employee');
let index = -1;
for(i = 0; i < employeeList.length; i++) {
if(employeeList[i].name === input){
index = i;
    }
  }
employeeList.splice(index, 1);
for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
}