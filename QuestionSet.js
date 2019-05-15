/*
Author: Chris Lam
Github: https://github.com/chclam
*/


class QuestionSet {

	constructor(){
		this.title;
		this.questions = []
	}

	getQuestionTitle(){
		return this.title;
	}

	setQuestionTitle(newTitle) {
		this.title = newTitle;
	}

	getQuestion(selectedIndex){
		return this.questions[selectedIndex];
	}

	setQuestion(newQuestion, newAnswer, currentIndex){
		this.questions[currentIndex] = {
			question: newQuestion,
		 	answer: newAnswer
		};
		console.log(questionSet.title);		
		console.log(questionSet.questions);
	}

	getQuestions(){
		return this.questions;
	}

	saveQuestions(){
		let s = txt.CreateTextFile("./test.txt", True);
		questionSet.questions.forEach(function(question) {
			s.writeline(question + ",");
		});
	}

	clearQuestions(){
		this.questions.length = 0;
	}
}


