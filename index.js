/*
Author: Chris Lam
Github: https://github.com/chclam
*/

var questions = [];

function changeText(){
	if (questions.length == 0){
		return "There are no questions!";
	}
	let i = Math.floor(Math.random() * questions.length);
	return questions[i];
}

function getQuestion(selectedIndex){
	return questions[selectedIndex];
}

function storeQuestion(newQuestion, currentIndex){
		questions[currentIndex] = newQuestion;
		console.log(questions);
}

function getQuestions(){
	return questions;
}

function clearQuestions(){
	questions = [];
}


