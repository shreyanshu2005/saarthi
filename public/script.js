const registerButton = document.getElementById("reg");
        registerButton.addEventListener("click", () => {
            window.open("register.html", "_blank");
        });

const startButton = document.getElementById("start");
        startButton.addEventListener("click",()=>{
            window.open("register.html");
        })

document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll('.service-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });

    serviceItems.forEach(item => {
        observer.observe(item);
    });
});



function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(2);

    let bmiCategory = '';
    let angle = 0;
    let suggestions = [];

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
        angle = -45;
        suggestions = [
            "Consume a calorie surplus by eating nutrient-dense meals, such as whole grains, nuts, and healthy fats.",
            "Increase your protein intake to support muscle growth and maintain overall health.",
            "Incorporate strength training exercises to build lean muscle mass and improve metabolism."
        ];
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal weight';
        angle = 0;
        suggestions = [
            "Maintain a balanced diet rich in vegetables, fruits, whole grains, and lean proteins.",
            "Stay physically active by engaging in regular exercise such as cardio, strength training, and flexibility exercises.",
            "Keep track of your mental and physical health, ensuring you get enough sleep and manage stress effectively."
        ];
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Overweight';
        angle = 45;
        suggestions = [
            "Adopt a calorie deficit by reducing portion sizes and avoiding sugary, processed foods.",
            "Increase your physical activity through regular cardio workouts, such as brisk walking, jogging, or cycling.",
            "Incorporate strength training to build muscle and boost your metabolism for long-term fat loss."
        ];
    } else {
        bmiCategory = 'Obese';
        angle = 90;
        suggestions = [
            "Consult a healthcare professional or a registered dietitian to create a personalized nutrition plan.",
            "Engage in low-impact exercises, like swimming or walking, to minimize joint strain while staying active.",
            "Gradually implement lifestyle changes, such as reducing fast food consumption and prioritizing home-cooked meals."
        ];
    }

    document.getElementById('bmiValue').innerText = `BMI: ${bmi}`;
    document.getElementById('bmiCategory').innerText = `Category: ${bmiCategory}`;
    document.getElementById('needle').style.transform = `rotate(${angle}deg)`;

    
    const suggestionsList = document.getElementById('suggestions');
    suggestionsList.innerHTML = ''; 
    suggestions.forEach((tip, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = tip;
        suggestionsList.appendChild(listItem);
    });
    function openChat() {
        document.getElementById("chatBot").style.display = "block";
    }

    function handleChat() {
        const userInput = document.getElementById('userInput').value;
        const chatBox = document.getElementById('chatBox');

        if (userInput.trim() === "") return;

        displayMessage(userInput, 'user');

        const [height, weight] = userInput.split(',').map(value => parseFloat(value.trim()));

        if (isNaN(height) || isNaN(weight)) {
            displayMessage("Please provide valid height and weight in the format: height, weight (e.g., 170, 70).", 'bot');
            return;
        }

        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        let bmiCategory = '';
        let suggestions = [];

        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
            suggestions = ["Eat more protein.", "Try strength training.", "Increase calorie intake."];
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = 'Normal weight';
            suggestions = ["Maintain current diet.", "Stay active.", "Manage stress well."];
        } else {
            bmiCategory = 'Overweight';
            suggestions = ["Reduce portions.", "Increase cardio.", "Consult professionals."];
        }

        displayMessage(`Your BMI is ${bmi} and categorized as ${bmiCategory}.`, 'bot');
        suggestions.forEach(suggestion => displayMessage(suggestion, 'bot'));
    }

    function displayMessage(message, sender) {
        const chatBox = document.getElementById('chatBox');
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById('userInput').value = '';
    }
}


function openChat() {
    document.getElementById("chatBot").style.display = "block";
}

function handleChat() {
    const userInput = document.getElementById('userInput').value;
    const chatBox = document.getElementById('chatBox');

    if (userInput.trim() === "") return;

    displayMessage(userInput, 'user');

    const [height, weight] = userInput.split(',').map(value => parseFloat(value.trim()));

    if (isNaN(height) || isNaN(weight)) {
        displayMessage("Please provide valid height and weight in the format: height, weight (e.g., 170, 70).", 'bot');
        return;
    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    let bmiCategory = '';
    let suggestions = [];

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
        suggestions = ["Eat more protein.", "Try strength training.", "Increase calorie intake."];
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal weight';
        suggestions = ["Maintain current diet.", "Stay active.", "Manage stress well."];
    } else {
        bmiCategory = 'Overweight';
        suggestions = ["Reduce portions.", "Increase cardio.", "Consult professionals."];
    }

    displayMessage(`Your BMI is ${bmi} and categorized as ${bmiCategory}.`, 'bot');
    suggestions.forEach(suggestion => displayMessage(suggestion, 'bot'));
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById('userInput').value = '';
}





