function showLogin() {
  document.getElementById('login-modal').classList.remove('hidden');
}
function showRegister() {
  document.getElementById('register-modal').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('login-modal').classList.add('hidden');
  document.getElementById('register-modal').classList.add('hidden');
}
function loginManual() {
  alert('Login berhasil (dummy)');
  closeModal();
}
function registerManual() {
  alert('Registrasi berhasil (dummy)');
  closeModal();
}
function handleGoogleLogin(response) {
  alert('Login Google berhasil!');
}
window.onload = function() {
  setTimeout(() => {
    document.getElementById('ad-container').classList.remove('hidden');
  }, 3000);

  if (typeof atOptions === 'undefined') {
    document.getElementById('ad-warning').classList.remove('hidden');
  }

  const history = JSON.parse(localStorage.getItem('videoHistory') || '[]');
  const recommendations = document.getElementById('recommendations');
  history.forEach(url => {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = 300;
    iframe.height = 200;
    iframe.frameBorder = 0;
    iframe.allowFullscreen = true;
    recommendations.appendChild(iframe);
  });

  const currentVideo = "https://dsvplay.com/e/j76jq4svkvtj";
  if (!history.includes(currentVideo)) {
    history.push(currentVideo);
    localStorage.setItem('videoHistory', JSON.stringify(history));
  }
};
