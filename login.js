document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const status = document.getElementById("login-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Dummy login credentials
    if (username === "pglife" && password === "1234") {
      status.style.color = "green";
      status.textContent = "Login successful!";
      setTimeout(() => {
        window.location.href = "index.html"; // Redirect to homepage
      }, 1000);
    } else {
      status.style.color = "red";
      status.textContent = "Invalid username or password.";
    }
  });
});
