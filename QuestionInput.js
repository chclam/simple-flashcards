let maxIndex = 0;
let selectedIndex = 0;

const questionSet = new QuestionSet();

function startEntrySession(title){
    title = title.trim();
    if (title.length === 0){
        throw "No title assigned.";
    }
    questionSet.setQuestionTitle(title);
    let instructionText = document.createTextNode("Enter your questions for " + questionSet.getQuestionTitle() + ".");
    let instructionElement = document.getElementById("entryInstruction");
    instructionElement.appendChild(instructionText);

    // Hide title entry screen and show entry screen.
    document.getElementById("titleScreen").style.display = "none";
    document.getElementById("entryScreen").style.display = "block";
}


//To next question entry and append a question index.
function newQuestion(){

    let newQuestion = document.getElementById("questionInputArea").value;
    let newAnswer = document.getElementById("answerInputArea").value;
    questionSet.setQuestion(newQuestion, newAnswer, selectedIndex);

    newQuestion = newQuestion.trim();
    newAnswer = newAnswer.trim();

    //Check if there is an empty entry and open the empty entry if that is the case.

    let lastQuestionPair = questionSet.getQuestion(maxIndex);

    if(lastQuestionPair.question.length === 0 || lastQuestionPair.answer.length === 0){
        openQuestion(maxIndex);
        throw "Please enter both a question and an answer.";
    }

    maxIndex++;
    selectedIndex = maxIndex;

    document.getElementById('questionInputArea').value = null;
    document.getElementById('answerInputArea').value = null; 		

    /*
        TO DO:
            - Limit question index to at most 10.
                parenNode.childElementCount, returns the amount of child elements.
    */
    //Append Index.(Number block at the top of the page.)
    let element = document.getElementById("questionIndex");
    let qRef = document.createElement("a");
    let qIndex = document.createTextNode(maxIndex + 1);

    qRef.setAttribute("href", "#");
    qRef.setAttribute("onclick", "openQuestion(" + maxIndex + ")");
    qRef.appendChild(qIndex);
    element.appendChild(qRef);
}


function openQuestion(indexNumber){
    if (maxIndex === 0){
        throw "Questions undefined";
    }
    let questionAreaValue = document.getElementById("questionInputArea").value;
    let answerAreaValue = document.getElementById("answerInputArea").value;

    questionSet.setQuestion(questionAreaValue, answerAreaValue, selectedIndex);
    let questionPair = questionSet.getQuestion(indexNumber);
    document.getElementById("questionInputArea").value = questionPair.question;
    document.getElementById("answerInputArea").value = questionPair.answer;
    selectedIndex = indexNumber;
}


// To do: give the selected question a white background. Using var. selectedIndex.
// function highlightSelected(){

// }

function endSession(){
    saveQuestion();
}