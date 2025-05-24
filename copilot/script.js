
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

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
        angle = -45; 
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal weight';
        angle = 0; 
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Overweight';
        angle = 45;
    } else {
        bmiCategory = 'Obese';
        angle = 90; 
    }

    document.getElementById('bmiValue').innerText = `BMI: ${bmi}`;
    document.getElementById('bmiCategory').innerText = `Category: ${bmiCategory}`;
    document.getElementById('needle').style.transform = `rotate(${angle}deg)`;
}





