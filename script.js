// Part 1: Variables & Conditionals

// Variable to store selected answer
let selectedAnswer = null;

// Correct answer for the quiz
const correctAnswer = "object";

// Get DOM elements
const optionButtons = document.querySelectorAll(".option");
const resultDisplay = document.getElementById("result");
const loopResultsDiv = document.getElementById("loopResults");

// Part 2: Custom Functions

// Function to handle option selection
function selectAnswer(e) {
    // Clear previous selection
    optionButtons.forEach(btn => btn.classList.remove("selected"));
    e.target.classList.add("selected");
    selectedAnswer = e.target.textContent;
}

// Function to check the answer and show feedback
function checkAnswer() {
    if (!selectedAnswer) {
        resultDisplay.textContent = "Please select an answer first!";
        resultDisplay.style.color = "red";
        return;
    }

    // Conditional logic to check answer
    if (selectedAnswer === correctAnswer) {
        resultDisplay.textContent = "Correct! ✅";
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.textContent = `Wrong. The correct answer is "${correctAnswer}". ❌`;
        resultDisplay.style.color = "red";
    }

    // Run loops to demonstrate logic
    runForLoop();
    runWhileLoop();
}

// Part 3: Loops

// For loop: Display numbers from 1 to 5
function runForLoop() {
    let output = "For Loop: ";
    for (let i = 1; i <= 5; i++) {
        output += i + " ";
    }
    appendLoopResult(output);
}

// While loop: Countdown from 5 to 1
function runWhileLoop() {
    let count = 5;
    let output = "While Loop: ";
    while (count > 0) {
        output += count + " ";
        count--;
    }
    appendLoopResult(output);
}

// Part 4: DOM Interactions

// Interaction 1: Button click to select answer
optionButtons.forEach(button => {
    button.addEventListener("click", selectAnswer);
});

// Interaction 2: Submit button to check answer
document.getElementById("submitBtn").addEventListener("click", checkAnswer);

// Interaction 3: Updating the innerHTML dynamically
function appendLoopResult(text) {
    const p = document.createElement("p");
    p.textContent = text;
    loopResultsDiv.appendChild(p);
}