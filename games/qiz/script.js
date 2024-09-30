// Initialize correct answers for each question
const correctAnswers = {
    que1: 'legislative',
    que2: 'executive',
    que3: 'judiciary',
    que4: 'legislative',
    que5: 'executive',
    que6: 'judiciary',
    que7: 'legislative',
    que8: 'executive',
    que9: 'judiciary',
    que10: 'legislative'
};

function handleSelection(questionId) {
    const selectedValue = document.getElementById(questionId).value;
    console.log(`Selected option for ${questionId}: ${selectedValue}`);
}

function handleSubmit(event) {
    // Prevent form submission (to keep the demo on the same page)
    event.preventDefault();

    const formElements = document.getElementById('quizForm').elements;
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Iterate through each question and check answers
    for (let questionId in correctAnswers) {
        let selectedValue = formElements[questionId].value;
        if (selectedValue === correctAnswers[questionId]) {
            score++;
            showPopup();
        }
    }

    // Display feedback to the user
    let feedback = document.getElementById('feedback');
    feedback.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

document.getElementById('quizForm').addEventListener('submit', handleSubmit);
