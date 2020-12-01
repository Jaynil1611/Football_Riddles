var chalk = require('chalk');
var readlineSync = require('readline-sync');

const normalText = chalk.whiteBright.bold;
const correct = chalk.greenBright.bold;
const headerColor = chalk.bold.black.bgRgb(3, 252, 252);
const scoreColor = chalk.bgWhite.bold.black;
const questionColor = chalk.bgYellowBright.black;
var score = 0;

const questions = [
	{
		question: 'I made my international debut for Brazil in 1993 and scored in the game. I played in two World Cup finals and my club career saw me play in Brazil, Italy, Angola, Spain, Greece and Uzbekistan.',
    options: ['Ronaldo','Pele','Ronaldinho','Rivaldo'],
		answer: 3
	},
	{
		question: 'I\'ve played in Germany, Italy, Austria and France. I have won Serie A and scored the first ever Golden Goal in international football.',
		options: ['Oliver Kahn','Oliver Bierhoff','Didier Drogba','Michael Owen'],
    answer: 1
	},
	{
		question: 'I have played in the Conference, League Two, League One, Championship, Premier League, the UEFA Cup, Champions League and the World Cup.',
		options: ['Steve Finnan','Michael Owen','Bastian Schweinsteiger','Marcel Desailly'],
    answer: 2
	},
	{
		question: 'I was the first Liverpool player to win the Ballon d\'Or. I scored 40 goals for my country and have played in England and Spain.',
		options: ['Steve Finnan','Xabi Alonso','Steven Gerrard','Michael Owen'],
    answer: 3
	},
	{
		question: 'I was originally a striker before becoming a defender. I played 11 seasons for the same club before managing them. I\'ve won two Bundesliga titles and a Champions League.',
		options: ['Hansi Flick','Jurgen Klopp','Zinedine Zidane','Alex Ferguson'],
    answer: 1
	},
  	{
		question: 'I have played for Chelsea and spent time playing in Turkey. I\'ve been crowned African Footballer of the Year four times and the Africa Cup of Nations twice.',
		options: ['Samuel Eto\'o','Didier Drogba','Victor Moses','John Obi Mikel'],
    answer: 0
	},
  	{
		question: 'I have won league titles in Italy, Germany, Portugal and Austria. I also won the European Cup both as a player and as a manager.',
		options: ['Zinedine Zidane','Alex Ferguson','Giovanni Trapattoni','Carlo Ancelotti'],
    answer: 2
	},
  	{
		question: 'I am the manager who first named David Beckham as England captain.',
		options: ['Alan Pardew','Sam Allardyce','Harry Redknapp','Peter Taylor'],
    answer: 3
	},
  	{
		question: 'I\'ve won the World Cup and European Championship at international level and I won the Champions League on two occasions as manager of two different clubs.',
		options: ['Jupp Heynckes','Josep Guardiola','Carlo Ancelotti','José Mourinho'],
    answer: 0
	},
  	{
		question: 'I\'ve worn numbers 7, 17, 28 and 9 in my career, playing my football across, England, Spain, Italy and Portugal.',
		options: ['Bruno Fernandes','Cristiano Ronaldo','Bernardo Silva','Joao Cancelo'],
    answer: 1
	}
];

var highScorers = ['Jaynil','Karan','Kartik'];

function evaluateAnswer(options,question, answer) {
  console.log('\n' + questionColor(question) + '\n');
	var userSelectedOption = readlineSync.keyInSelect(options,'Choose an option: ',{cancel:false});

	if (Number(userSelectedOption) === answer) {
		score += 1;
		console.log(chalk.greenBright('\nYou are absolutely right!'));
    if(score === 10){
      highScorers.push(userName);
    }
	} else {
		console.log(chalk.red('\nYour answer is wrong!'));
		console.log(correct('\nThe correct answer is: ' + answer));
	}
	console.log(scoreColor('\nScore is: ' + score));
  lineBreak();
}

function lineBreak()
{
  	console.log(
		chalk.cyanBright.bold('\n-----------------------------------------')
	);
}

function printQuestions(questionList) {
	for (var i = 0; i < questionList.length; i++) {
		evaluateAnswer(questionList[i].options,questionList[i].question, questionList[i].answer);
	}
}

function printHighSCorers(highScorers){
    lineBreak();
    console.log(chalk.bgRed("\n TOP SCORERS \tSCORE "));
    for(var i = 0; i <highScorers.length; i++) {
      console.log(chalk.yellowBright.bold("\n "+highScorers[i]+"\t\t\t"+" 10"));
    }
}

console.log(
	chalk.redBright.bold("\nLet's test your football knowledge: ")+ scoreColor(" WHO AM I? \n"));

var userName = readlineSync.question(
	headerColor('Please tell us your good name:\n')
);

console.log(
	normalText(
		'\nWelcome ' + scoreColor(' ' + userName + ' ') + ' to this quiz!\n'
	)
);

console.log(
	chalk.bold.underline('\nHere are some rules before you start playing: ')
);

console.log(
	'\n1. There are a total of ' +
		chalk.bgRed(' 10 ') +
		' Questions.\n2. Each correct answer gives you +1 while wrong answer gives you -1.\n3. You need choose the correct option from the available options.\n'
);

if (
	readlineSync.keyInYNStrict(
		normalText('\nAre you ready to take this quiz challenge? \n')
	)
) {
	printQuestions(questions);
} else {
	console.log(
		chalk.redBright('\nSeems like you are not ready. Please try again later\n')
	);
	throw new Error(chalk.redBright.bold('Not Ready to Attempt Quiz'));
}

console.log(
	correct('\nCongratulations! on completing the quiz. Here are the results: ')
);

console.log(
	scoreColor('\nFinal score of ' + chalk.bold(userName) + ' is: ') +
		chalk.bgRed(' ' + score + ' ')
);

if(score === 10)
{
  console.log(correct("\nYou are one of the Top Scorers. Congrats!!!"));
}

printHighSCorers(highScorers);

console.log(
	chalk.greenBright(
		'\nTo know more about football please visit: ' +
			chalk.underline('https://www.goal.com/')
	)
);