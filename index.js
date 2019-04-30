/*
Author: Chris Lam
Github: https://github.com/chclam
*/


class QuestionSet {

	constructor(title){
		this.title = title;
		this.questions = []
	}

	setQuestionTitle(newTitle) {
		this.title = newTitle;
	}

	getQuestionTitle(){
		return this.title;
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

	saveQuestions(){
		let s = txt.CreateTextFile("./test.txt", True);
		questionSet.questions.forEach(function(question) {
			s.writeline(question + ",");
		});
	}

	getQuestions(){
		return this.questions;
	}

	clearQuestions(){
		this.questions.length = 0;
	}
}


