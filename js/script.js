const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function() {
  if (passwordInput.value === confirmPasswordInput.value) {
    window.location.href = 'exito2.html';
  } else {
    alert('Las contraseñas no coinciden');
  }
});