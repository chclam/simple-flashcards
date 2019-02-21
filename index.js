/*
Author: Chris Lam
Github: https://github.com/chclam
*/

var questions = [];
var questionIndex = 0;

function changeText(){
	if (questions.length == 0){
		return "There are no questions!";
	}
	let i = Math.floor(Math.random() * questions.length);
	return questions[i];
}

function getQuestion(inquiredIndex){
	return questions[inquiredIndex];
}

function addQuestion(newQuestion){
	if (!newQuestion){
		alert("Please enter a question.");
		throw "Question is empty.";
	}
	questionIndex++;
	questions.push(newQuestion);
	console.log(questions);
}

function getQuestionIndex(){
	return questionIndex;
}

function clearQuestions(){
	questions = [];
}
