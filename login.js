document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  // Dummy credentials for login
  const validUsername = 'user';
  const validPassword = 'password';

  if (username === validUsername && password === validPassword) {
    // Redirect to the Tic-Tac-Toe game page
    window.location.replace('index.html'); // Use `replace` instead of `href`
  } else {
    // Show error message
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'Invalid username or password';
  }
});
