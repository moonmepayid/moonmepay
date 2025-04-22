document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;
  
  // Contoh validasi (password bisa disimpan lebih aman di backend)
  if (username === "admin" && password === "12345") {
    window.location.href = "index.html"; // Redirect ke dashboard
  } else {
    alert("Login gagal! Coba lagi.");
  }
});
