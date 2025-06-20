document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the values of the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded username and password for simplicity
    const correctUsername = 'vivek019';
    const correctPassword = 'svs@777';

    // Validate login credentials
    if (username === correctUsername && password === correctPassword) {
        // Show success message and prompt user to continue
        alert('Login successful! Click OK to start the quiz.');

        // Redirect to the quiz page after clicking "OK"
        window.location.href = 'second.html'; // This redirects the user to quiz.html
    } else {
        // Show error message if the credentials are incorrect
        document.getElementById('errorMessage').textContent = 'Incorrect username or password.';
    }
});
