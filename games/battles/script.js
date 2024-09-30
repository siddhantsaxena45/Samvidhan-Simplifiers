// Predefined scenarios for the game
const scenarios = {
    Executive: [
        "The Parliament has passed a controversial bill. Will you sign it into law?",
        "There's a national crisis! Do you declare a state of emergency?"
    ],
    Legislature: [
        "The Executive has proposed a bill. Will you vote in favor of it?",
        "Should the budget for defense be increased this year?"
    ],
    Judiciary: [
        "A new law is being challenged in court for violating citizens' rights. Will you uphold the law?",
        "The President has declared a national emergency. Should the Judiciary intervene?"
    ]
};

let currentRole = "";

// Function to select a role and display a scenario
function selectRole(role) {
    currentRole = role;
    const scenarioBox = document.getElementById('scenarioBox');
    const scenarioText = document.getElementById('scenarioText');
    const roleSelected = document.getElementById('roleSelected');
    
    // Update the role selected
    roleSelected.innerText = `You are the ${role}!`;

    // Choose a random scenario for the selected role
    const randomScenario = scenarios[role][Math.floor(Math.random() * scenarios[role].length)];
    scenarioText.innerText = randomScenario;
}

// Function to handle battle actions
function battleAction(action) {
    const scenarioText = document.getElementById('scenarioText');

    // Placeholder for future game logic
    if (currentRole) {
        scenarioText.innerText = `You chose to ${action} as the ${currentRole}. (Next steps in game logic...)`;
    } else {
        scenarioText.innerText = "Please select a role to continue.";
    }
}
