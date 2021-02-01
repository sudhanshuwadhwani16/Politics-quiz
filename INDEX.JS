var readlineSync = require('readline-sync');
var chalk = require("chalk")

var userName = chalk.bold.red(readlineSync.question(chalk.blue(("What's your name?  "))));

console.log("Welocome to the quiz " + userName + "\n");
console.log("Topic of the quiz is" + chalk.yellowBright(" Politics"))
var score = 0;

function quiz(options, question, answer){
  var index = readlineSync.keyInSelect(options, chalk.yellow(question));
  var userAnswer = options[index];
  
  var answerIndex = options.indexOf(answer)

  if(userAnswer === answer){
    console.log(chalk.underline.blue("Correct!"))
    score=score + 1;
  
  }else if(index == "-1"){
    console.log("You choose to skip this question")
  }
  else{
    console.log(chalk.underline.red("Incorrect!"));  
    console.log("Correct answer is " + (answerIndex + 1) + " " +  chalk.bgYellow(answer))

  }
  console.log(chalk.bgRed("Your score is :",score))
  console.log("\n")
}

var questions = [{
  options : ["Pratibha Patil","Sarojini Naidu","Indira Gandhi","Sucheta Kripalani"],
  question : "Who was the first women Prime Minister of India?",
  answer : "Indira Gandhi"
},{
  options : ["The Prime Minister","The President","The Speaker of Lok Sabha","The Chief Justice of India"],
  question : "Who is called the first citizen of India?",
  answer : "The President"
},{
  options : ["25","21","18","35"],
  question : "The minimum age to qualify for election to the Lok Sabha is?",
  answer : "25"
},{
  options : ["English only","Hindi only","English or Hindi","English, Hindi or mother tongue"],
  question : "The members of Parliament can express themselves in the House in?",
  answer : "English, Hindi or mother tongue"
},{
  options : ["Bankim Chandra Chatterjee","Rabindranath Tagore","Sarat Chandra Chatterjee","Aurobindo Ghosh"],
  question : "The national anthem was written by?",
  answer : "Rabindranath Tagore"
}]



for(var i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  quiz(currentQuestion.options,currentQuestion.question, currentQuestion.answer);
}

console.log("You scored " + score + "/" + 5 + ".")
if(score == 0){
  console.log(chalk.bold.redBright("Better luck next time!"))
}else if(score == 1 || score == 2){
  console.log(chalk.bold.redBright("You can do better!"))
}else if(score == 3 || score == 4){
  console.log(chalk.bold.redBright("It was close! You almost did it!"))
}else{
  console.log(chalk.bold.redBright("You nailed it!"))
}