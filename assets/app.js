const form = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const statusMessage = document.getElementById('statusMessage');
const togglePassword = document.getElementById('togglePassword');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearMessages();

  let isValid = true;

  if (!emailInput.value.trim()) {
    showError(emailError, 'Email is required.');
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailError, 'Enter a valid email address.');
    isValid = false;
  }

  if (!passwordInput.value.trim()) {
    showError(passwordError, 'Password cannot be empty.');
    isValid = false;
  }

  if (!isValid) {
    showStatus('Please correct the highlighted fields.', 'error');
    return;
  }

  showStatus('Credentials look good. Submitting...', 'success');
});

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.textContent = isPassword ? 'Hide' : 'Show';
});

function showError(element, message) {
  element.textContent = message;
}

function clearMessages() {
  emailError.textContent = '';
  passwordError.textContent = '';
  statusMessage.textContent = '';
  statusMessage.className = 'status-message';
}

function showStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.classList.add(type);
}
