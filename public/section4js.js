// Exercise dataBase 
const exercises = {
    pushup: {
        name: 'Push Up',
        steps: [
            'Start in a plank position with your hands slightly wider than shoulder-width apart.',
            'Lower your body until your chest nearly touches the floor.',
            'Push yourself back up to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'push up.jpg',
        videoLink: 'https://youtu.be/jWxvty2KROs' 
    },
    
    benchPress: {
        name: 'Bench Press',
        steps: [
            'Lie flat on a bench with a barbell above you.',
            'Grip the barbell slightly wider than shoulder-width.',
            'Lower the bar to your chest, then press it back up to starting position.',
            'Keep your feet flat on the ground and your back slightly arched.'
        ],
        image: 'bench_press.jpg', 
        videoLink: 'https://www.youtube.com/watch?v=gRVjAtPip0Y' 
    },
    inclineBenchPress: {
        name: 'Incline Bench Press',
        steps: [
            'Set an adjustable bench to a 30-45 degree angle.',
            'Grip the barbell slightly wider than shoulder-width.',
            'Lower the barbell to your upper chest, then press it back up.',
            'Keep your feet flat on the ground for stability.'
        ],
        image: 'incline_bench_press.jpg', 
        videoLink: 'https://www.youtube.com/watch?v=SrqYt5lK5tM' 
    },
    chestFly: {
        name: 'Chest Fly',
        steps: [
            'Lie flat on a bench with dumbbells in each hand, arms extended above your chest.',
            'Lower your arms out to the sides, keeping a slight bend in your elbows.',
            'Bring the weights back together, squeezing your chest muscles at the top.',
            'Ensure that you do not overstretch and maintain control of the weights.'
        ],
        image: 'chest_fly.jpg', 
        videoLink: 'https://www.youtube.com/watch?v=eozdVDA78K0' 
    },
    dips: {
        name: 'Dips',
        steps: [
            'Place your hands on the bars and suspend your body in the air.',
            'Lower your body until your upper arms are parallel to the floor.',
            'Push yourself back up to the starting position, keeping your torso upright.',
            'For a chest focus, lean forward slightly while dipping.'
        ],
        image: 'dips.jpg', 
        videoLink: 'https://www.youtube.com/watch?v=2z8JmcrW-As' 
    },
    cableCrossover: {
        name: 'Cable Crossover',
        steps: [
            'Stand facing a cable machine with both handles in your hands.',
            'Pull the cables together in front of your body, keeping a slight bend in your elbows.',
            'Squeeze your chest at the peak of the movement before slowly returning to the start.',
            'Control the weight and maintain constant tension on your chest muscles.'
        ],
        image: 'cable_crossover.jpg', 
        videoLink: 'https://www.youtube.com/watch?v=taI4XduLpTk' 
    },
    shoulderPress: {
        name: 'Shoulder Press',
        steps: [
            'Sit on a bench with back support and hold a dumbbell in each hand at shoulder height.',
            'Press the dumbbells overhead until your arms are fully extended.',
            'Slowly lower the dumbbells back to the starting position.',
            'Keep your core tight and avoid arching your back.'
        ],
        image: 'shoulder_press.jpg', 
        videoLink: 'https://www.youtube.com/watch?v=B-aVuyhvLHU' 
    },
    lateralRaise: {
        name: 'Lateral Raise',
        steps: [
            'Stand with a dumbbell in each hand at your sides, palms facing in.',
            'Lift the dumbbells out to the sides until your arms are parallel to the floor.',
            'Slowly lower the dumbbells back to the starting position.',
            'Do not use momentum to lift the weights; focus on controlled movement.'
        ],
        image: 'lateral_raise.jpg', 
        videoLink: 'https://www.youtube.com/watch?v=kDqklk1ZESo' 
    },
    frontRaise: {
        name: 'Front Raise',
        steps: [
            'Hold a dumbbell in each hand in front of your thighs, palms facing your body.',
            'Lift the dumbbells in front of you until your arms are parallel to the floor.',
            'Slowly lower the dumbbells back down to the starting position.',
            'Keep your core tight and avoid swinging the weights.'
        ],
        image: 'front_raise.jpg', 
        videoLink: 'https://www.youtube.com/watch?v=-t7fuZ0KhDA' 
    },
    arnoldPress: {
        name: 'Arnold Press',
        steps: [
            'Start with a dumbbell in each hand, palms facing your shoulders.',
            'Press the dumbbells overhead while rotating your palms to face forward.',
            'Reverse the movement, lowering the dumbbells back to the starting position.',
            'Keep your core engaged and maintain proper posture throughout.'
        ],
        image: 'arnold_press.jpg',
        videoLink: 'https://www.youtube.com/watch?v=vj2w851ZHRM'  
    },
    uprightRow: {
        name: 'Upright Row',
        steps: [
            'Hold a barbell or dumbbells in front of your thighs with your palms facing your body.',
            'Pull the weight straight up towards your chin, keeping your elbows above your wrists.',
            'Slowly lower the weight back to the starting position.',
            'Avoid using excessive weight to prevent shoulder strain.'
        ],
        image: 'upright_row.jpg',  
        videoLink: 'https://www.youtube.com/watch?v=zi2gRcs1nKY' 
    },
       
    bicepCurl: {
        name: 'Bicep Curl',
        steps: [
            'Stand with your feet shoulder-width apart, holding a dumbbell in each hand.',
            'Keep your elbows close to your torso and palms facing forward.',
            'Curl the dumbbells towards your shoulders while contracting your biceps.',
            'Slowly lower the weights back to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'bicep_curl.jpg',
        videoLink: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo'
    },
    hammerCurl: {
        name: 'Hammer Curl',
        steps: [
            'Stand with your feet shoulder-width apart, holding a dumbbell in each hand.',
            'Keep your elbows close to your torso and your palms facing inward.',
            'Curl the dumbbells towards your shoulders while contracting your biceps.',
            'Slowly lower the weights back to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'hammer_curl.jpg',
        videoLink: 'https://www.youtube.com/watch?v=zC3nLlEvin4'
    },
    concentrationCurl: {
        name: 'Concentration Curl',
        steps: [
            'Sit on a bench with your legs apart and your elbow resting on your inner thigh.',
            'Hold a dumbbell in one hand with your palm facing upward.',
            'Curl the dumbbell towards your shoulder while keeping your upper arm stationary.',
            'Slowly lower the dumbbell back to the starting position.',
            'Repeat for the desired number of reps and then switch arms.'
        ],
        image: 'concentration_curl.jpg',
        videoLink: 'https://www.youtube.com/watch?v=kwG2ipFRgfo'
    },
    preacherCurl: {
        name: 'Preacher Curl',
        steps: [
            'Sit on a preacher bench with your arms resting on the pad.',
            'Hold a barbell or dumbbells with your palms facing upward.',
            'Curl the weight towards your shoulders while contracting your biceps.',
            'Slowly lower the weight back to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'preacher_curl.jpg',
        videoLink: 'https://www.youtube.com/watch?v=3h0dlJ2McgE'
    },
    cableBicepCurl: {
        name: 'Cable Bicep Curl',
        steps: [
            'Stand facing a cable machine with a straight bar attached at the low setting.',
            'Grab the bar with an underhand grip and step back slightly.',
            'Curl the bar towards your shoulders, keeping your elbows stationary at your sides.',
            'Slowly return to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'cable_bicep_curl.jpg',
        videoLink: 'https://www.youtube.com/watch?v=kwG2ipFRgfo'
    },

    // Triceps Exercises
    tricepDip: {
        name: 'Tricep Dip',
        steps: [
            'Place your hands on a bench or dip bars, and extend your legs out in front of you.',
            'Lower your body by bending your elbows until they reach a 90-degree angle.',
            'Push yourself back up to the starting position by straightening your arms.',
            'For a greater focus on the triceps, keep your torso upright throughout the movement.'
        ],
        image: 'tricep_dip.jpg',
        videoLink: 'https://www.youtube.com/watch?v=2z8JmcrW-As'
    },
    tricepPushdown: {
        name: 'Tricep Pushdown',
        steps: [
            'Stand facing a cable machine with a rope or bar attachment at the high setting.',
            'Grip the attachment with both hands and pull it towards your torso.',
            'Push the rope or bar down until your arms are fully extended at your sides.',
            'Slowly return to the starting position by bending your elbows.',
            'Repeat for the desired number of reps.'
        ],
        image: 'tricep_pushdown.jpg',
        videoLink: 'https://www.youtube.com/watch?v=vB6U4L3V5sA'
    },
    skullCrusher: {
        name: 'Skull Crusher',
        steps: [
            'Lie flat on a bench with a barbell or dumbbells in your hands, arms extended above your chest.',
            'Bend your elbows to lower the weights towards your forehead, keeping your upper arms stationary.',
            'Extend your arms back to the starting position, focusing on using your triceps.',
            'Repeat for the desired number of reps.'
        ],
        image: 'skull_crusher.jpg',
        videoLink: 'https://www.youtube.com/watch?v=d_KZxkY_0cM'
    },
    closeGripBenchPress: {
        name: 'Close Grip Bench Press',
        steps: [
            'Lie flat on a bench and grip the barbell with your hands closer than shoulder-width apart.',
            'Lower the barbell towards your chest while keeping your elbows close to your body.',
            'Press the bar back up to the starting position, focusing on your triceps.',
            'Repeat for the desired number of reps.'
        ],
        image: 'close_grip_bench_press.jpg',
        videoLink: 'https://www.youtube.com/watch?v=3B_6tGEw9VA'
    },
    overheadTricepExtension: {
        name: 'Overhead Tricep Extension',
        steps: [
            'Sit or stand with a dumbbell or cable rope in both hands.',
            'Extend your arms overhead, keeping your elbows close to your ears.',
            'Lower the dumbbell or rope behind your head by bending your elbows.',
            'Extend your arms back to the starting position by contracting your triceps.',
            'Repeat for the desired number of reps.'
        ],
        image: 'overhead_tricep_extension.jpg',
        videoLink: 'https://www.youtube.com/watch?v=3fJfHpjPZyk'
    },
    deadlift: {
        name: 'Deadlift',
        steps: [
            'Stand with your feet shoulder-width apart and the barbell over your midfoot.',
            'Bend at the hips and knees to grip the barbell with your hands just outside your knees.',
            'Lift your chest and tighten your core as you push through your heels.',
            'Stand up straight, extending your hips and knees fully, pulling the barbell up along your body.',
            'Lower the barbell back down by pushing your hips back and bending your knees.'
        ],
        image: 'deadlift.jpg',
        videoLink: 'https://www.youtube.com/watch?v=op9kVnSso6Q'
    },
    bentOverRow: {
        name: 'Bent Over Row',
        steps: [
            'Stand with your feet shoulder-width apart, holding a barbell or dumbbells.',
            'Bend forward at the hips, keeping your back straight and chest up.',
            'Pull the weight towards your lower chest, squeezing your shoulder blades together.',
            'Slowly lower the weight back to the starting position, maintaining control.',
            'Repeat for the desired number of reps.'
        ],
        image: 'bent_over_row.jpg',
        videoLink: 'https://www.youtube.com/watch?v=VtXkX19KLpM'
    },
    pullUp: {
        name: 'Pull Up',
        steps: [
            'Grab a pull-up bar with your palms facing away from you, hands slightly wider than shoulder-width.',
            'Hang with your arms fully extended and your legs straight down.',
            'Pull your chin above the bar by retracting your shoulder blades and pulling with your arms.',
            'Lower yourself back down in a controlled manner to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'pull_up.jpg',
        videoLink: 'https://www.youtube.com/watch?v=eGo4IYlbE5g'
    },
    latPulldown: {
        name: 'Lat Pulldown',
        steps: [
            'Sit at a lat pulldown machine and grip the bar with your palms facing away from you.',
            'Pull the bar down towards your chest, squeezing your shoulder blades together.',
            'Slowly return the bar to the starting position, fully extending your arms.',
            'Focus on using your back muscles to pull the bar down.'
        ],
        image: 'lat_pulldown.jpg',
        videoLink: 'https://www.youtube.com/watch?v=CAwf7n6Luuc'
    },
    tBarRow: {
        name: 'T Bar Row',
        steps: [
            'Stand over a T-bar machine or landmine attachment and grip the handles.',
            'Keep your back straight and chest up as you pull the weight towards your torso.',
            'Squeeze your shoulder blades together at the top of the movement.',
            'Slowly return the weight to the starting position, controlling the descent.',
            'Repeat for the desired number of reps.'
        ],
        image: 'tbar_row.jpg',
        videoLink: 'https://www.youtube.com/watch?v=psFZP3_wHOs'
    },
    singleArmDumbbellRow: {
        name: 'Single Arm Dumbbell Row',
        steps: [
            'Place one knee and one hand on a bench for support, with a dumbbell in the other hand.',
            'Pull the dumbbell towards your torso, keeping your elbow close to your body.',
            'Squeeze your shoulder blade at the top of the movement.',
            'Slowly lower the dumbbell back to the starting position.',
            'Repeat for the desired number of reps, then switch arms.'
        ],
        image: 'single_arm_dumbbell_row.jpg',
        videoLink: 'https://www.youtube.com/watch?v=pYcpY20QaE8'
    },
    invertedRow: {
        name: 'Inverted Row',
        steps: [
            'Lie under a barbell set on a squat rack, grabbing the bar with an overhand grip.',
            'Keep your body straight, with your feet on the floor and your chest beneath the bar.',
            'Pull your chest up towards the bar by retracting your shoulder blades.',
            'Lower your body back down in a controlled motion.',
            'Repeat for the desired number of reps.'
        ],
        image: 'inverted_row.jpg',
        videoLink: 'https://www.youtube.com/watch?v=QK2Lw5kVe5g'
    },
    barbellRow: {
        name: 'Barbell Row',
        steps: [
            'Stand with your feet shoulder-width apart, holding a barbell with an overhand grip.',
            'Bend at the hips and knees, keeping your back flat and chest up.',
            'Pull the barbell towards your lower chest, squeezing your shoulder blades together.',
            'Slowly lower the barbell back to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'barbell_row.jpg',
        videoLink: 'https://www.youtube.com/watch?v=vT2GjY_Umpw'
    },
    facePull: {
        name: 'Face Pull',
        steps: [
            'Stand facing a cable machine with the rope attachment at the high setting.',
            'Grab the rope with both hands and step back, pulling the rope towards your face.',
            'Pull the rope apart as you squeeze your rear deltoids and upper back.',
            'Slowly return to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'face_pull.jpg',
        videoLink: 'https://www.youtube.com/watch?v=rep-qVOkqgk'
    },
    seatedRow: {
        name: 'Seated Row',
        steps: [
            'Sit on a rowing machine and grip the handles with both hands.',
            'Pull the handles towards your torso while keeping your back straight and squeezing your shoulder blades together.',
            'Slowly return the handles to the starting position, fully extending your arms.',
            'Repeat for the desired number of reps.'
        ],
        image: 'seated_row.jpg',
        videoLink: 'https://www.youtube.com/watch?v=HJSQvD9Zg8I'
    },
    legPress: {
        name: 'Leg Press',
        steps: [
            'Sit on the leg press machine and place your feet shoulder-width apart on the platform.',
            'Lower the weight by bending your knees until they form a 90-degree angle.',
            'Push the platform back up by extending your legs, but don’t lock your knees.',
            'Repeat for the desired number of reps.'
        ],
        image: 'leg_press.jpg',
        videoLink: 'https://www.youtube.com/watch?v=IZxyjW7MPJQ'
    },
    lunges: {
        name: 'Lunges',
        steps: [
            'Stand with your feet shoulder-width apart and step forward with one leg.',
            'Lower your hips by bending both knees until your back knee almost touches the ground.',
            'Push through your front foot to return to the starting position.',
            'Repeat on the other leg.'
        ],
        image: 'lunges.jpg',
        videoLink: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U'
    },
    legCurl: {
        name: 'Leg Curl',
        steps: [
            'Lie face down on a leg curl machine and hook your feet under the pad.',
            'Curl your legs upwards towards your glutes while keeping your hips pressed down.',
            'Lower the weight back slowly to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'leg_curl.jpg',
        videoLink: 'https://www.youtube.com/watch?v=av7-8igSXTs'
    },
    legExtension: {
        name: 'Leg Extension',
        steps: [
            'Sit on the leg extension machine with your feet under the padded bar.',
            'Extend your legs fully, contracting your quads at the top of the movement.',
            'Slowly lower the weight back down to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'leg_extension.jpg',
        videoLink: 'https://www.youtube.com/watch?v=8f0f3uTqZWE'
    },
    calfRaise: {
        name: 'Calf Raise',
        steps: [
            'Stand with your feet shoulder-width apart and place the balls of your feet on the edge of a raised platform.',
            'Slowly lower your heels toward the floor, feeling a stretch in your calves.',
            'Push through the balls of your feet to raise your body back up to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'calf_raise.jpg',
        videoLink: 'https://www.youtube.com/watch?v=YMmgqO8Jo-k'
    },
    BulgarianSplitSquat: {
        name: 'Bulgarian Split Squat',
        steps: [
            'Stand a few feet away from a bench, facing away from it.',
            'Place one foot behind you on the bench and keep the other foot planted on the floor.',
            'Lower your hips by bending your front knee until your back knee almost touches the floor.',
            'Push through your front heel to return to the starting position.'
        ],
        image: 'bulgarian_split_squat.jpg',
        videoLink: 'https://www.youtube.com/watch?v=2C-uNgKwPLE'
    },
    stepUp: {
        name: 'Step Up',
        steps: [
            'Stand in front of a bench or step with your feet shoulder-width apart.',
            'Step up onto the bench with one leg, pressing through your heel.',
            'Bring the other leg up to join it on the bench.',
            'Step back down one leg at a time to return to the starting position.'
        ],
        image: 'step_up.jpg',
        videoLink: 'https://www.youtube.com/watch?v=dQqApCGd5Ss'
    },
    gluteBridge: {
        name: 'Glute Bridge',
        steps: [
            'Lie on your back with your knees bent and feet flat on the ground.',
            'Push through your heels and lift your hips towards the ceiling, squeezing your glutes at the top.',
            'Lower your hips back down slowly to the starting position.',
            'Repeat for the desired number of reps.'
        ],
        image: 'glute_bridge.jpg',
        videoLink: 'https://www.youtube.com/watch?v=8bbE64NuDTU'
    },
    hipThrust: {
        name: 'Hip Thrust',
        steps: [
            'Sit on the floor with your upper back against a bench and a barbell over your hips.',
            'Place your feet flat on the floor, shoulder-width apart, and lower the barbell onto your hips.',
            'Push through your heels to thrust your hips upward until your body forms a straight line from your shoulders to your knees.',
            'Lower your hips back down to the starting position.'
        ],
        image: 'hipthrust.jpg',
        videoLink: 'https://www.youtube.com/watch?v=LM8XHLYJoYs'
    },


    squat: {
        name: 'Squat',
        steps: [
            'Stand with your feet shoulder-width apart and toes slightly turned out.',
            'Bend your knees and lower your hips, as if you’re sitting in a chair.',
            'Ensure your knees don’t extend beyond your toes.',
            'Push through your heels to stand back up.'
        ],
        image: 'squat.jpg',
        videoLink: 'https://youtube.com/shorts/eFEVKmp3M4g?feature=shared'
    },
    plank: {
        name: 'Plank',
        steps: [
            'Start in a forearm plank position with your body in a straight line.',
            'Keep your abs tight and don’t let your hips sag.',
            'Hold the position for as long as you can while maintaining proper form.'
        ],
        image: 'plank.jpg',
        videoLink: 'https://www.youtube.com/watch?v=pSHjTRCQxIw'
    }
};


function searchExercise() {
    const input = document.getElementById('exerciseSearch').value.trim().toLowerCase();
    const normalizedInput = input.replace(/\s+/g, '').toLowerCase();

    let found = false;


    for (const key in exercises) {
        const exercise = exercises[key];
        const normalizedName = exercise.name.toLowerCase().replace(/\s+/g, '').toLowerCase();

        if (normalizedInput === normalizedName) {
            found = true;
            displayExercise(exercise);
            break;
        }
    }

    if (!found) {
    
        document.getElementById('exerciseResult').style.display = 'none';
        alert('Exercise not found! Try another one.');
    }
}


function displayExercise(exercise) {
    const resultContainer = document.getElementById('exerciseResult');
    const exerciseName = document.getElementById('exerciseName');
    const exerciseSteps = document.getElementById('exerciseSteps');
    const exerciseImage = document.getElementById('exerciseImage');
    const exerciseVideo = document.getElementById('exerciseVideo');


    exerciseName.textContent = '';
    exerciseSteps.innerHTML = '';
    exerciseImage.innerHTML = '';
    exerciseVideo.style.display = 'none';


    exerciseName.textContent = exercise.name;


    exercise.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        exerciseSteps.appendChild(li);
    });

    if (exercise.image) {
        exerciseImage.innerHTML = `<img src="${exercise.image}" alt="${exercise.name}" style="width: 100%; height: auto; border-radius: 8px;">`;
    }


    if (exercise.videoLink) {
        exerciseVideo.href = exercise.videoLink;
        exerciseVideo.textContent = 'Watch the demonstration video here';
        exerciseVideo.target = '_blank';
        exerciseVideo.style.display = 'inline-block';
    }


    resultContainer.style.display = 'block';
}


document.getElementById('exerciseForm').addEventListener('submit', function (e) {
    e.preventDefault();
    searchExercise();
});
