// map of questions and answers
const quiz = [
    {
        question: 'choose answer choice A',
        choiceA: 'A',
        choiceB: 'B',
        choiceC: 'C',
        choiceD: 'D',
        answerkey: 'A',
    },

    {
        question: 'choose answer choice B',
        choiceA: 'A',
        choiceB: 'B',
        choiceC: 'C',
        choiceD: 'D',
        answerkey: 'B',
    },

    {
        question: 'choose answer choice C',
        choiceA: 'A',
        choiceB: 'B',
        choiceC: 'C',
        choiceD: 'D',
        answerkey: 'C',
    },

    {
        question: 'choose answer choice D',
        choiceA: 'A',
        choiceB: 'B',
        choiceC: 'C',
        choiceD: 'D',
        answerkey: 'D',
    }
];

var startButtonEl = document.getElementById('startButton')
var startPromptEl = document.getElementById('startPrompt')
var quizContentEl = document.getElementById('quizContent')


// function to begin quiz
function beginQuiz(){
    console.log('startButtonEl works')

    // make quiz prompt hidden
    startPromptEl.style.display = "none";
    
    // make quiz content appear
    quizContentEl.style.display = "block";
}



startButtonEl.addEventListener('click', beginQuiz)