const wheelCanvas = document.getElementById('wheel');
const ctx = wheelCanvas.getContext('2d');
const spinButton = document.getElementById('spinButton');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const answerButton = document.getElementById('answerButton');

// Constitutional sections for the wheel
const sections = [
    { label: "Legislature", question: "What is the role of the Parliament?", color: "#f39c12" },
    { label: "Executive", question: "What powers does the Prime Minister have?", color: "#e74c3c" },
    { label: "Judiciary", question: "How does the Judiciary ensure justice?", color: "#2ecc71" },
    { label: "Fundamental Rights", question: "Name one fundamental right in the Constitution.", color: "#3498db" },
    { label: "Amendments", question: "How can the Constitution be amended?", color: "#9b59b6" },
    { label: "Federalism", question: "Explain the concept of federalism in the Constitution.", color: "#1abc9c" }
];

const highlightColor = '#FFFF00'; // Color to highlight the section where it stops

// Wheel configuration
const wheelRadius = wheelCanvas.width / 2;
const sectionAngle = 2 * Math.PI / sections.length;
let currentAngle = 0;
let spinTimeout;
let spinVelocity = 0;
let spinAcceleration = 0;
let selectedSectionIndex = -1;

// Draw the wheel
function drawWheel() {
    ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
    sections.forEach((section, i) => {
        const angle = currentAngle + i * sectionAngle;
        
        // Draw section background
        ctx.beginPath();
        ctx.moveTo(wheelRadius, wheelRadius);
        ctx.arc(wheelRadius, wheelRadius, wheelRadius, angle, angle + sectionAngle);
        ctx.fillStyle = i === selectedSectionIndex ? highlightColor : section.color; // Highlight selected section
        ctx.fill();
        ctx.stroke();

        // Draw section label
        ctx.save();
        ctx.translate(wheelRadius, wheelRadius);
        ctx.rotate(angle + sectionAngle / 2);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(section.label, wheelRadius / 2, 0);
        ctx.restore();
    });
}

// Spin the wheel
function spinWheel() {
    spinVelocity = Math.random() * 0.2 + 0.2; // Random spin velocity
    spinAcceleration = 0.99; // Gradually slow down
    selectedSectionIndex = -1;
    answerButton.classList.add('hidden');
    resultText.innerText = "Spinning...";
    spin();
}

function spin() {
    if (spinVelocity > 0.001) {
        currentAngle += spinVelocity;
        spinVelocity *= spinAcceleration;
        drawWheel();
        spinTimeout = requestAnimationFrame(spin);
    } else {
        cancelAnimationFrame(spinTimeout);
        getResult();
    }
}

// Get the result based on the final position
function getResult() {
    selectedSectionIndex = Math.floor((currentAngle / (2 * Math.PI)) * sections.length) % sections.length;
    const selectedSection = sections[selectedSectionIndex];

    resultTitle.innerText = `You landed on: ${selectedSection.label}`;
    resultText.innerText = selectedSection.question;
    answerButton.classList.remove('hidden');
    drawWheel(); // Redraw wheel with the highlighted section
}

// Handle answer button click
function answerQuestion() {
    resultText.innerText = "Great! You answered the question.";
}

// Initial draw of the wheel
drawWheel();
