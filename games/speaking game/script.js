// Questions and answers for the game
const questions = [
    { question: "What is the preamble of the Constitution?", answer: "We the people of India" },
    { question: "Which part of the Constitution talks about fundamental rights?", answer: "Part 3" },
    { question: "How many schedules are there in the Indian Constitution?", answer: "12" }
];

let currentQuestionIndex = 0;

// Speech Synthesis API (for speaking)
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}

// Speech Recognition API (for listening)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;

// Function to start the game
function startGame() {
    currentQuestionIndex = 0;
    askQuestion();
}

// Function to ask a question
function askQuestion() {
    const questionElement = document.getElementById('question');
    const question = questions[currentQuestionIndex].question;
    questionElement.textContent = question;
    speak(question);
}

// Function to check the user's spoken answer
function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
    const resultElement = document.getElementById('result');

    if (userAnswer.toLowerCase().includes(correctAnswer)) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = "Wrong! Correct answer is: " + correctAnswer;
        resultElement.style.color = 'red';
    }
    
    currentQuestionIndex++;
    
    // Ask next question if available
    if (currentQuestionIndex < questions.length) {
        setTimeout(askQuestion, 3000); // Ask next question after a delay
    } else {
        setTimeout(() => {
            resultElement.textContent = "Game Over!";
            document.getElementById('question').textContent = '';
        }, 3000);
    }
}

// Function to start listening for user's answer
function listenAnswer() {
    recognition.start();

    recognition.onresult = (event) => {
        const userAnswer = event.results[0][0].transcript;
        checkAnswer(userAnswer);
    };

    recognition.onerror = (event) => {
        console.log('Error occurred in recognition: ' + event.error);
    };
}

// Sidebar toggle
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('close-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
});

// Event listeners
document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('speak-answer').addEventListener('click', listenAnswer);
