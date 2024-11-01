// Employee data array
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Rob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Sid Fedex', age: 25, department: 'Shipping', salary: 40000 },
];

// Helper function to format employee details consistently
function formatEmployeeDetails(employee) {
    return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary.toLocaleString()}</p>`;
}

// Function to display all employees
function displayAllEmployees() {
    const totalEmployees = employees
        .map(employee => formatEmployeeDetails(employee))
        .join('');
    
    const displayElement = document.getElementById('employeesDetails');
    if (displayElement) {
        displayElement.innerHTML = totalEmployees;
    }
}

// Function to calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries.toLocaleString()}`);
}

// Function to display HR employees
function displayHREmployees() {
    const hrEmployees = employees
        .filter(employee => employee.department === 'HR')
        .map(employee => formatEmployeeDetails(employee))
        .join('');
    
    const displayElement = document.getElementById('employeesDetails');
    if (displayElement) {
        displayElement.innerHTML = hrEmployees || 'No HR employees found.';
    }
}

// Function to find employee by ID
function findEmployeeById(employeeId) {
    // Convert employeeId to number and validate
    const searchId = parseInt(employeeId);
    
    if (isNaN(searchId)) {
        document.getElementById('employeesDetails').innerHTML = 'Please enter a valid ID number.';
        return;
    }

    const foundEmployee = employees.find(employee => employee.id === searchId);
    const displayElement = document.getElementById('employeesDetails');
    
    if (displayElement) {
        if (foundEmployee) {
            displayElement.innerHTML = formatEmployeeDetails(foundEmployee);
        } else {
            displayElement.innerHTML = 'No employee has been found with this ID.';
        }
    }
}