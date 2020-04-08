const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios");


const questions = [
    {
        type:"input",
        name:"username",
        message:"What is your github username?"
    },
    {
        type:"input",
        name:"title",
        message:"What is your project's title?"
    },
    {
        type:"input",
        name:"desc",
        message:"Please write a short description of your project."
    },
    {
        type:"list",
        name:"license",
        message:"What kind of license should your project have?",
        choices:["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"]
    },
    {
        type:"input",
        name:"depend",
        message:"What command should be run to install dependencies?",
        default:"npm i",
    },
    {
        type:"input",
        name:"test",
        message:"What command should be run to run tests?",
        default:"npm test"
    },
    {
        type:"input",
        name:"know",
        message:" What does the user need to know about using the repo?",
    },
    {
        type:"input",
        name:"contrib",
        message:"What does the user need to know about contributing to the repo?"
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
     }) 
     console.log("Write file ended!");
}

var dta = [];

function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            api.getUser(data.username)
            setTimeout(function(){
                const md = generateMarkdown(data, dta);
                console.log("Write to file started!");
            writeToFile("README.md", md);
            },500);
        })    
}



const api = {
    getUser(username) {
      const queryUrl = `https://api.github.com/users/${username}`;
  
      axios.get(queryUrl).then(function(res) {

        dta.push(res.data.avatar_url);
      }); 
    }
};


init();
