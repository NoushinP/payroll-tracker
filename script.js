// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let allEmployees = [];

// Collect employee data
const collectEmployees = function() {
  const firstName = prompt('Please tell me your first name')
  const lastName = prompt('Please tell me your last name')
  let salary = prompt('Please tell me your salary ') 

  while (isNaN(salary)) {
    salary = prompt('please enter number for salary');
  }

  console.log(firstName, lastName, salary)
  salary = parseInt(salary)
  allEmployees.push({'firstName': firstName, 'lastName': lastName, 'salary': salary }); // we commanded to put all these info from array inside the allEmployee which is the global on top


    // another question to ask the user if they want to add another employee
  const addAnotherEmployee = confirm('add another employee');
  
  // if they do, ask the above questions again, otherwise just return an array of employees
  if (addAnotherEmployee == true) {
    console.log('New Employee');
    collectEmployees();
  }
  return allEmployees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0.00; //search how to turn into float parseFloat()
  let numberOfEployees = 0;

  employeesArray.forEach(element => {
    totalSalary = totalSalary + element.salary;
    numberOfEployees++;
  });

  console.log("The average employee salary between our "+ numberOfEployees + " employee(s) " + totalSalary); 
  // Salary = parseFloat()
}

// // Select a random employee
const getRandomEmployee = function(employeesArray) {

  let randomEmployee = employeesArray[(Math.floor(Math.random() * employeesArray.length))];

  console.log('The random employee winner is ' + randomEmployee.firstName + ' ' + randomEmployee.lastName + ' !');
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}


// console.log(getRandomIntInclusive())

const trackEmployeeData = function() {
  const employees = collectEmployees();
  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);