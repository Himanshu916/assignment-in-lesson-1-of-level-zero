var chalk = require("chalk");
console.log(`------------${chalk.yellow("QUIZ")}------------`);
console.log("")

console.log(chalk.bold.inverse.red("ARE YOU A BIG FAN OF LIONEL MESSI ? "));
var readLineSync = require("readline-sync");
console.log("")

var user = readLineSync.question("What Is Your Name ? ");
console.log(" ");
console.log(chalk.red.bold("INSTUCTIONS"));
var instruction = `1.you need to type the option for the correct answer.
2.press the enter button after each response.`
console.log(chalk.blue.bold(instruction))
console.log("")

console.log("WELCOME ",user,"to the QUIZ");
var score =0;

var questions = [
  {
    question:`Q-1 Which Club in Argentina did Messi play for in his Youth career?
    a. Rosario Central
    b. Newell's Old Boys
    c. Tiro Federal
    d. Belgrano de Rosario

    YOUR ANSWER ---> `,
    answer:"b"
  },
  {
    question:`Q-2 How old was Messi when he made his official debut for Barcelona?
    a. 16
    b. 17
    c. 18
    d. 19
    
    YOUR ANSWER --->`,
    answer:"b"
  },
  {
    question:`Q-3 When did Messi win the Ballon d’Or for the first time?
    a. Brazil
    b. Spain
    c. Nigeria
    d. United States
    
    YOUR ANSWER --->`,
    answer:"c"
  },
  {
    question:`Q-4 Which of these numbers has Messi NOT worn for Barcelona?
    a. 2
    b. 30
    c. 19
    d. 10
    
    YOUR ANSWER --->`,
    answer:"a"
  },
  {
    question:`Q-5 When did Messi win the Ballon d’Or for the first time?
    a. 2007
    b. 2008
    c. 2009
    d. 2010
    
    YOUR ANSWER --->`,
    answer:"c"
  },
  {
    question:`Q-6 Germany defeated Argentina in the 2014 FIFA World Cup Final. Did Messi score in this game?
    a. yes
    b. no
    
    YOUR ANSWER --->`,
    answer:"b"
  },
  {
    question:`Q-7 Messi made his debut for Argentina in 2005. What happened 43 seconds into his debut?
    a. He scored a goal
    b. He got an assist
    c. He got injured
    d. He got a red
    
    YOUR ANSWER --->`,
    answer:"d"
  },
  {
    question:`Q-8 Which team did Messi score 5 goals against during a game in the 2012 UEFA Champions League?
    a. Bayer Leverkusen
    b. Milan
    c. CSKA Moscow
    d. Real Madrid
    
    YOUR ANSWER --->`,
    answer:"a"
  },
  {
    question:`Q-9 Which of these years did Messi score 50 league goals?
    a. 2009–10
    b. 2011-12
    c. 2013-14
    d. 2015-16
    
    YOUR ANSWER --->`,
    answer:"b"
  },
  {
    question:`Q-10 True Or False: Messi has more career La Liga goals than Cristiano Ronaldo
    a. True
    b. False
    
    YOUR ANSWER --->`,
    answer:"a"
  }

]

function play(question,answer)
{
  var currentAnswer = readLineSync.question(question);
  if(currentAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.inverse.green.bold("right"));
    score += 1;
    console.log(`${chalk.green("score")}:`,chalk.green(score));
  }
  else
  {
    console.log(chalk.inverse.red.bold("wrong"))
    console.log(`${chalk.green("score")}:`,chalk.green(score));
  }

  console.log("--------------------")

}

for(var i=0;i<questions.length;i++)
{
  currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("<<<<<----------End Quiz---------->>>>>");
console.log("");
if(score>5)
{
console.log(chalk.green.bold(`Hey ${user} you scored : ${score} !!!! YES YOU ARE REALLY A BIG FAN OF MESSI !`));
}

else
{
  console.log(chalk.red.bold(`Hey ${user} you scored : ${score} !!!! YES YOU LIKE MESSI BUT MAY BE YOU ARE NOT A BIG FAN OF MESSI !`));
}

function displayHighScorer()
{
  var user = {
    userName:"Himanshu Rana",
    scorepoint:10
  }
  console.log("Highest Scorer : ",chalk.blue.bold(user.userName))
  console.log("Score :",chalk.blue.bold(user.scorepoint))
}
console.log("")

var pressKey = readLineSync.question(chalk.rgb(255, 136, 0).bold("PRESS 1 to know whose score is highest !"))
console.log("");

if(pressKey==1)
{

 displayHighScorer();
}

