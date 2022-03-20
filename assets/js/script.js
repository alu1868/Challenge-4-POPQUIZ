// map of questions and answers
const quiz = [
    {
        question: 'Commonly used data types DO NOT include:',
        choice: ['strings','boolens','alerts','numbers'],
        answerkey: 'alerts',
    },

    {
        question: 'The condition in an if/else statement is enclosed with _____.',
        choice: ['quotes','curly brackets','parenthesis','square brackets'],
        answerkey: 'parenthesis',
    },

    {
        question: 'Arrays in JavaScript can be used to store',
        choice: ['numbers and strings','other arrays','boolens','all of the above'],
        answerkey: 'all of the above',
    },

    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        choice: ['commas','curly brackets','parenthesis','quotes'],
        answerkey: 'quotes',
    },

    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice: ['JavaScript','terminal/bash','for loops','console.log'],
        answerkey: 'console.log',
    }
];

// start quiz button
var startButtonEl = document.getElementById('startButton')
var tryAgainEl = document.getElementById('tryAgain')

// grabbing each major section
var startPromptEl = document.getElementById('startPrompt')
var quizContentEl = document.getElementById('quizContent')
var scoreScreenEl = document.getElementById('scoreScreen')
var correctIncorrectEl = document.getElementById('correctIncorrect')

    // timer
    var timerEl = document.getElementById('timer')

    // question
    var questionEl = document.getElementById('question')

    // buttons
    var btnAEl = document.getElementById('btnA')
    var btnBEl = document.getElementById('btnB')
    var btnCEl = document.getElementById('btnC')
    var btnDEl = document.getElementById('btnD')
    var answerKeyEl = document.getElementById('answerKey')

    // score 
    var scoreEl = document.getElementById('score')
    var currentScore = 0;
    var finalScore = 0;

    // tracking what question
    var weAreOnQuestion = 0;

    // time
    var timerStart = 60;


// function to begin quiz
function beginQuiz() {

    
    console.log('startButtonEl works')
    
    // make quiz prompt hidden
    startPromptEl.classList.add('d-none');
    
    // make quiz content appear
    quizContentEl.classList.remove('d-none')

    // make quiz footer appear
    correctIncorrectEl.classList.remove('d-none')

    generateQuestion()
    startTimer()
}

// function to start timer
function startTimer() {

    // display timer
    timerEl.textContent = ('time left:' + timerStart)
    countdown = setInterval(function() {
        // update timer upon -1
        --timerStart;
        timerEl.textContent = ('time left:' + timerStart)

        // if timer hits 0 continue to endquiz protocol 
        if (timerStart <= 0) {
            timerEl.textContent = ('time left: 0')
            timerStart = 0;
            endQuiz();
        }

    },1000);
}

// function to generate quiz
function generateQuestion() {

    // display quiz questions
    for (var i = 0; i < quiz.length; i++) {
        // give question value of question from quiz
        questionEl.textContent = quiz[weAreOnQuestion].question

        // give answer choice A text and value
        btnAEl.textContent = quiz[weAreOnQuestion].choice[0]
        btnAEl.value = quiz[weAreOnQuestion].choice[0]

        // give answer choice B text and value
        btnBEl.textContent = quiz[weAreOnQuestion].choice[1]
        btnBEl.value = quiz[weAreOnQuestion].choice[1]

        // give answer choice C text and value
        btnCEl.textContent = quiz[weAreOnQuestion].choice[2]
        btnCEl.value = quiz[weAreOnQuestion].choice[2]

        // give answer choice D text and value
        btnDEl.textContent = quiz[weAreOnQuestion].choice[3]
        btnDEl.value = quiz[weAreOnQuestion].choice[3]

        // give answerkey value to check later
        answerKeyEl.value = quiz[weAreOnQuestion].answerkey
    }
}


// function to check answer from user input
function checkAnswer(event) {
    var answer = event.target

    if (answer.value == answerKeyEl.value) {
        console.log('answer is correct')
        correctIncorrectEl.textContent = ('Correct!')
        correctIncorrectEl.classList.add('text-success')
        currentScore = currentScore + 15;
        proceed()
    }
    else {
        console.log('answer is incorrect')
        correctIncorrectEl.textContent = ('INCORRECT!')
        correctIncorrectEl.classList.add('text-danger')
        timerStart = timerStart - 15;
        proceed()
    }


}

// function to check what question number we're at, then move on if theres still quiz left
function proceed() {
    weAreOnQuestion++
    if (weAreOnQuestion >= quiz.length){
        endQuiz()
    }
    else {
        generateQuestion()
    }
}

// quiz end screen
function endQuiz() {
    quizContentEl.classList.add('d-none');
    scoreScreenEl.classList.remove('d-none');
    correctIncorrectEl.classList.add('d-none')
    scoreEl.textContent = ('This is your final Score: ' + (currentScore))
    timerEl.textContent = ('time left: 0')
    timerStart = 0;
}

function tryAgain() {
    scoreScreenEl.classList.add('d-none')
    startPromptEl.classList.remove('d-none');
    weAreOnQuestion = 0;
    currentScore = 0;
    timerStart = 60;
}

tryAgainEl.addEventListener('click',tryAgain)
startButtonEl.addEventListener('click', beginQuiz)

btnAEl.addEventListener('click', checkAnswer)
btnBEl.addEventListener('click', checkAnswer)
btnCEl.addEventListener('click', checkAnswer)
btnDEl.addEventListener('click', checkAnswer)