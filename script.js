document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if username and password match the desired values
    if (username !== 'username' || password !== 'password') {
        alert('Invalid username/password. Please try again.');
        return;
    }

    // Proceed with login if the username and password are correct
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var score = 0;
    var corrections = [];

    var answers = {
        'q1': '1', 
        'q2': '2', // Correct answer for question 2
        'q3': '1', // Correct answer for question 3
        'q4': '1', // Correct answer for question 4
        'q5': '4'  // Correct answer for question 5
        // Add more answers for additional questions
    };

    // Loop through each question
    for (var i = 1; i <= Object.keys(answers).length; i++) {
        var question = 'q' + i;
        var selectedAnswer = document.querySelector('input[name="' + question + '"]:checked');

        // Check if an answer is selected
        if (selectedAnswer) {
            // Check if the selected answer is correct
            if (selectedAnswer.value === answers[question]) {
                score++;
            } else {
                // If the selected answer is wrong, add the correction to the list
                corrections.push('Question ' + i + ': Correct answer is option ' + answers[question]);
            }
        } else {
            // If no answer is selected, add the correction to the list
            corrections.push('Question ' + i + ': No answer selected');
        }
    }

    // Display the score and corrections
    document.getElementById('score').textContent = 'Your score: ' + score + '/' + Object.keys(answers).length;
    var correctionsOutput = '';
    if (corrections.length > 0) {
        correctionsOutput = 'Corrections:\n';
        corrections.forEach(function(correction) {
            correctionsOutput += correction + '\n';
        });
    } else {
        correctionsOutput = 'No corrections needed.';
    }
    document.getElementById('corrections').textContent = correctionsOutput;

    // Show the result section
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
});
