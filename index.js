var readlineSync = require('readline-sync');
const chalk = require('chalk');
var currentScore = 0;
var userName = readlineSync.question(chalk.blue('What is your name ? '));

console.log(
  chalk.italic(
    'Welcome ' +
      userName +
      ' to "DO YOU KNOW Chinmay ?"\nHere goes the questions:\n',
  ),
);

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.blue(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You're amazing! :)"));
    currentScore = currentScore + 1;
  } else {
    console.log(chalk.red('Wrong :('));
  }

  console.log('Current Score: ', currentScore);
  console.log(chalk.yellow('------------------------'));
}

var questionList = [
  {
    question:
      'Where do I live ? \na. Hyderabad \nb. Mumbai\nc. Chennai\nd. Delhi\n',
    answer: 'a',
  },
  {
    question:
      'My favorite superhero is: \na. Superman \nb. IronMan\nc. Batman\nd. Hulk\n',
    answer: 'c',
  },
  {
    question:
      "I'm most active on: \na. Twitter \nb. Whatsapp\nc. Telegram\nd. LinkedIn\n",
    answer: 'c',
  },
  {
    question:
      'I listen songs on: \na. Youtube Music \nb. Wynk Music\nc. Spotify\nd. Gaana \n',
    answer: 'c',
  },
  {
    question:
      'My favorite actor: \na. Chrisian Bale  \nb. Johnny Depp\nc. Brad Pitt\nd. Leonardo DiCaprio \n',
    answer: 'a',
  },
];

var scoreList = [
  {
    name: 'Chinmay Manas',
    score: 5,
  },
  {
    name: 'Akash',
    score: 4,
  },
];

for (var i = 0; i < questionList.length; i++) {
  play(questionList[i].question, questionList[i].answer);
}

console.log(chalk.yellow('------------------------'));
console.log(
  chalk.italic.bold.cyanBright('Your final score is: ', currentScore, '\n'),
);

if (currentScore > scoreList[1].score) {
  console.log('Yay! you made it to the high scoreres :)');
  scoreList[1].name = userName;
  scoreList[1].score = currentScore;
} else {
  console.log(chalk.bold.magentaBright('Top scores are: '));
}
for (var i = 0; i < 2; i++) {
  console.log(
    chalk.italic.bold.greenBright(
      scoreList[i].name + '\t' + scoreList[i].score,
    ),
  );
}
