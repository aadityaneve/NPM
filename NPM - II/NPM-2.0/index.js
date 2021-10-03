/* 
    Problem
    npm 2
    install inquirer
    request user for username and password
    use different types like input and password
*/


const inquirer = require('inquirer');
console.clear();


inquirer
    .prompt([
        {
            type: "input",
            name: "userName",
            message: "Enter user name : "
        },
        {
            type: "password",
            name: "password",
            mask: "*",
            message: "Enter password"
        }
    ])
    .then((response) => {
        console.log("User Name and Password stored successfully.");
    })
    .catch((error) => {
        console.log(error);
    })