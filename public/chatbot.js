const fitnessChatbot = {
    currentMode: null,
    failedAttempts: 0,
    trainerSuggestionMode: false,

    personalTrainer: {
        name: "Rohit Sharma",
        email: "rohit.fitness@saarthi.com",
        specialization: "Personal Fitness Coaching",
        contact: "+91 9876543210"
    },

    nutritionInfo: {
        'rice': {
            calories: '130 per 100g',
            protein: '2.7g',
            carbs: '28g',
            details: 'A staple in Indian diet, provides energy and basic nutrients'
        },
        'dal': {
            calories: '120 per 100g',
            protein: '9g',
            carbs: '20g',
            details: 'High in protein, essential for muscle building'
        },
        'chicken': {
            calories: '239 per 100g',
            protein: '27g',
            carbs: '0g',
            details: 'Excellent source of lean protein'
        },
        'paneer': {
            calories: '265 per 100g',
            protein: '18g',
            carbs: '6g',
            details: 'Rich in protein and calcium, commonly used in Indian dishes'
        },
        'spinach': {
            calories: '23 per 100g',
            protein: '2.9g',
            carbs: '3.6g',
            details: 'Leafy green vegetable rich in iron and vitamins'
        },
        'eggs': {
            calories: '155 per 100g',
            protein: '13g',
            carbs: '1.1g',
            details: 'A complete source of protein and essential nutrients'
        },
        'banana': {
            calories: '89 per 100g',
            protein: '1.1g',
            carbs: '23g',
            details: 'Great source of quick energy and potassium'
        },
        'almonds': {
            calories: '576 per 100g',
            protein: '21g',
            carbs: '22g',
            details: 'Rich in healthy fats, protein, and fiber'
        }
    },

    exerciseGuides: {
        'chest': [
            {
                name: 'Push-ups',
                steps: [
                    'Start in a plank position',
                    'Lower body until chest nearly touches the ground',
                    'Push back up to starting position',
                    'Repeat 10-15 times'
                ]
            },
            {
                name: 'Bench Press',
                steps: [
                    'Lie on a bench with feet flat on the floor',
                    'Grip the barbell slightly wider than shoulder-width',
                    'Lower the bar to your chest',
                    'Push the bar back up to starting position',
                    'Repeat 8-12 times'
                ]
            }
        ],
        'legs': [
            {
                name: 'Squats',
                steps: [
                    'Stand with feet shoulder-width apart',
                    'Lower body as if sitting in a chair',
                    'Keep back straight',
                    'Push back up to starting position',
                    'Repeat 12-15 times'
                ]
            },
            {
                name: 'Lunges',
                steps: [
                    'Stand upright with feet together',
                    'Step forward with one leg and lower your body',
                    'Push back up to starting position',
                    'Repeat with the other leg',
                    'Repeat 10-12 times per leg'
                ]
            }
        ],
        'back': [
            {
                name: 'Pull-ups',
                steps: [
                    'Grab the pull-up bar with palms facing away',
                    'Pull your body up until your chin is above the bar',
                    'Lower back down to starting position',
                    'Repeat 8-10 times'
                ]
            },
            {
                name: 'Deadlift',
                steps: [
                    'Stand with feet hip-width apart',
                    'Grip the barbell shoulder-width apart',
                    'Lift the bar while keeping your back straight',
                    'Lower the bar back to the ground',
                    'Repeat 6-8 times'
                ]
            }
        ],
        'arms': [
            {
                name: 'Bicep Curls',
                steps: [
                    'Hold dumbbells at your sides',
                    'Curl the weights toward your shoulders',
                    'Lower them back down slowly',
                    'Repeat 12-15 times'
                ]
            },
            {
                name: 'Tricep Dips',
                steps: [
                    'Position hands shoulder-width apart on a bench',
                    'Lower your body until your elbows are at a 90-degree angle',
                    'Push back up to starting position',
                    'Repeat 10-12 times'
                ]
            }
        ],
        'abs': [
            {
                name: 'Crunches',
                steps: [
                    'Lie on your back with knees bent',
                    'Place hands behind your head',
                    'Lift your shoulders off the ground',
                    'Lower back down slowly',
                    'Repeat 15-20 times'
                ]
            },
            {
                name: 'Plank',
                steps: [
                    'Start in a forearm plank position',
                    'Keep your body in a straight line',
                    'Hold the position for 30-60 seconds'
                ]
            }
        ]
    },

    calculateBMI: function (height, weight) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi >= 18.5 && bmi < 24.9) category = 'Normal weight';
        else if (bmi >= 25 && bmi < 29.9) category = 'Overweight';
        else category = 'Obese';

        return {
            value: bmi.toFixed(1),
            category: category
        };
    },

    processUserInput: function (input) {
        input = input.toLowerCase().trim();

        // Reset mode
        if (input === 'reset' || input === 'start over') {
            this.currentMode = null;
            this.failedAttempts = 0;
            this.trainerSuggestionMode = false;
            return "Let's start over. What would you like to do? You can choose: 'BMI', 'nutrition', or 'exercise'.";
        }

        
        if (this.trainerSuggestionMode) {
            if (input === 'yes') {
                this.trainerSuggestionMode = false;
                return `Personal Trainer Details:\nName: ${this.personalTrainer.name}\nSpecialization: ${this.personalTrainer.specialization}\nEmail: ${this.personalTrainer.email}\nContact: ${this.personalTrainer.contact}`;
            } else {
                this.trainerSuggestionMode = false;
                return "Understood. Is there anything else I can help you with?";
            }
        }

        switch (this.currentMode) {
            case 'bmi':
                const bmiMatch = input.match(/(\d+)\s*cm\s*(\d+)\s*kg/);
                if (bmiMatch) {
                    const [, height, weight] = bmiMatch;
                    const bmiResult = this.calculateBMI(Number(height), Number(weight));
                    this.failedAttempts = 0; // Reset failed attempts on success
                    return `Your BMI is ${bmiResult.value}. Category: ${bmiResult.category}\nYou are still in BMI mode. Enter another height and weight or type 'reset' to exit.`;
                }
                this.failedAttempts++;
                break;

            case 'nutrition':
                if (this.nutritionInfo[input]) {
                    const info = this.nutritionInfo[input];
                    this.failedAttempts = 0; // Reset failed attempts on success
                    return `Nutritional Info for ${input}:\nCalories: ${info.calories}\nProtein: ${info.protein}\nDetails: ${info.details}\nYou are still in Nutrition mode. Enter another food item or type 'reset' to exit.`;
                }
                this.failedAttempts++;
                break;

            case 'exercise':
                if (this.exerciseGuides[input]) {
                    const exercises = this.exerciseGuides[input];
                    this.failedAttempts = 0; // Reset failed attempts on success
                    return exercises.map(ex =>
                        `${ex.name} for ${input}:\n${ex.steps.join('\n')}`
                    ).join('\n\n') + "\nYou are still in Exercise mode. Enter another muscle group or type 'reset' to exit.";
                }
                this.failedAttempts++;
                break;

            default:
                if (input === 'calculate bmi') {
                    this.currentMode = 'bmi';
                    return "BMI Calculation Mode\nPlease enter your height and weight in the format: '170 cm 70 kg'.";
                } else if (input === 'nutrition') {
                    this.currentMode = 'nutrition';
                    return "Nutrition Info Mode\nPlease enter a food item (e.g., rice, dal, chicken).";
                } else if (input === 'exercise') {
                    this.currentMode = 'exercise';
                    return "Exercise Guide Mode\nPlease enter a muscle group (e.g., chest, legs).";
                }
                this.failedAttempts++;
        }

        // Suggest a trainer if failed attempts exceed threshold
        if (this.failedAttempts >= 3) {
            this.trainerSuggestionMode = true;
            this.failedAttempts = 0; // Reset failed attempts
            return "It seems like you're having trouble. Would you like to consult a personal trainer? (yes/no)";
        }

        return "I'm sorry, I didn't understand that. Please try again or type 'reset' to start over.";
    }
};

function openChatbot() {
    const chatbot = document.getElementById('chatBot');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    if (userInput.value.trim() === '') return;

    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    const botResponse = fitnessChatbot.processUserInput(userInput.value);

    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.textContent = botResponse;
    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    userInput.value = '';
}

document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
