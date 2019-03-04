/*
Author: Chris Lam
Github: https://github.com/chclam
*/

var questionSet = new Object();

function setQuestionTitle(newTitle){
	questionSet.title = newTitle;
}

function getQuestionTitle(newTitle){
	return questionSet.title;
}

function getQuestion(selectedIndex){
	return questionSet.questions[selectedIndex];
}

function setQuestion(newQuestion, currentIndex){
	if (!questionSet.questions){
		questionSet.questions = [];
	}
	questionSet.questions[currentIndex] = newQuestion;
	console.log(questionSet.title)		
	console.log(questionSet.questions);
}

// Save questions to a .txt file.
function saveQuestions(){
	let s = txt.CreateTextFile("./test.txt", True);
	questionSet.questions.forEach(function(question) {
		s.writeline(question + ",");
	});
}

//Get array of all the questions.
function getQuestions(){
	return questionSet.questions;
}

function clearQuestions(){
	questionSet.questions.length = 0;
}


