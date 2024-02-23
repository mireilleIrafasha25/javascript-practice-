var Quizesquestions=[
    {
Question:'How do you declare a variable in JavaScript?',
Options:['var myVariable', 'variable myVariable;','myVariable = var;',' declare myVariable;'],
Solution:'var myVariable;',
    },
    {
Question:'Which keyword is used to declare a variable that cannot be reassigned a new value?',
Options: [ ' let','const', 'var','varlet'],
Solution: 'const'
    },
    {
 Question:'What happens if you declare a variable without assigning a value to it?',
 Options:[ 'It will throw a syntax error.',' It will be automatically assigned a value of undefined.','It will be assigned a value of null.',' It will be initialized with a default value.'],
 Solution:' It will be automatically assigned a value of undefined.'
    },
    {
 Question:'Which of the following is NOT a valid variable name in JavaScript?',
 Options:[' myVariable','3variable','_variable',' $variable'],
 Solution:'3variable',
    },
    {
    Question:'What is the difference between let and var for declaring variables?',

Options:['There is no difference.','Variables declared with let have block scope, while variables declared with var have function scope.','Variables declared with let can be reassigned, while variables declared with var cannot.', 'let is used for global variables, and var is used for local variables.'],
Solution:'Variables declared with let have block scope, while variables declared with var have function scope.'
 },
]
// a function to display a random quiz question along with multiple-choice answers.
var randomQuestion=function()
{
// Select a random question index
var randomIndex = Math.floor(Math.random()*Quizesquestions.length)
//retrieve random questions object
var random1=Quizesquestions[randomIndex];
//displaying questions
console.log(random1.Question);

//displaying multiple options
random1.Options.forEach((option)=>{
console.log(option);});
return random1.Solution
}
//calling function to display randomly question and the options
//randomQuestion();
//Implement a scoring system to track correct and incorrect answers
 let score=
 {
    correct :0,
    incorrect:0
 }
// function to check correct and incorrect answers
const checkSolution=(userChoice,correctAnswer)=>{
    if(userChoice===correctAnswer)
    {
        console.log('correct Answer')
        score.correct++;
    }
    else{
        console.log('Incorrect')
        score.incorrect++
    }

}
//checkSolution('yes','yes')
//console.log(score)
// how we get userchoice and what is correct answer
for(let i =0;i< Quizesquestions.length;i++)
{
    console.log(`Question${i+1}.`);
    const correctAnswer=randomQuestion.Solution;
    checkSolution('3variable',correctAnswer)
}
//display final score 
console.log(`Final Score - Correct: ${score.correct}, Incorrect: ${score.incorrect}`)
