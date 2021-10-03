/* 
    Problem
    CLI game
    create a small game using all the things that you have learnt till now
    you can use inquirer or prompt as well to interact with the user
    some ideas are like TIC TAC TOE, or a Quiz
    build your own and be creative, this is your own
    You need to submit this before the end of the unit
    submit a small video for the assignment
*/


let data = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does the MP stand for in MP3?",
        correct_answer: "Moving Picture",
        incorrect_answers: [
            "Music Player",
            "Multi Pass",
            "Micro Point"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "The programming language was created to replace what other programming language?",
        correct_answer: "Objective-C",
        incorrect_answers: [
            "C#",
            "Ruby",
            "C++"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
        correct_answer: "Motherboard",
        incorrect_answers: [
            "Central Processing Unit",
            "Hard Disk Drive",
            "Random Access Memory"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "How many values can a single byte represent?",
        correct_answer: "256",
        incorrect_answers: [
            "8",
            "1",
            "1024"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: [
            "Python",
            "C",
            "Jakarta"
        ]
    }
]

var inquirer = require("inquirer");

console.log("***********************");
console.log("Welcome to Quiz App");
console.log("***********************");
var score = 0;
let questionNumber = 0;
let chance = 3;


const askQuestion = function () {
    console.log("***********************");
    inquirer
        .prompt([
            {
                type: "input",
                name: "question",
                message: data[questionNumber].question,
            }
        ])
        .then((response) => {
            // console.log(data[questionNumber].correct_answer.toLowerCase());
            if (response.question.toLowerCase() == data[questionNumber].correct_answer.toLowerCase()) {
                console.log("Correct!!!");
                score++;
                questionNumber++;
            }else{
                console.log("Wrong Answer");
                chance--;
                // console.log(chance);
                if(chance == 0){
                    questionNumber++;
                    chance = 3;
                }
            }
            if (questionNumber < 5) {
                askQuestion();
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally( function () {
            console.log("Your score is : "+score);
        })
}
askQuestion();



