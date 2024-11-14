const inquirer = require('inquirer');
const db = require('./db/connection');  // Import the client from connection.js

function employee_tracker() {
    inquirer.prompt([{
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add A Department',
            'Add A Role',
            'Add An Employee',
            'Update An Employee Role',
            'Log Out'
        ]
    }]).then((answers) => {
        if (answers.prompt === 'View All Departments') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Departments: ");
                console.table(result.rows); // Use .rows for the result
                employee_tracker();
            });
        }
        else if (answers.prompt === 'Log Out') {
            console.log("Goodbye!");
            process.exit();  // Exit the process instead of db.end()
        }
    });
}

employee_tracker();  // Start the prompt cycle
