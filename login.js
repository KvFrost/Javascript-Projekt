console.log("Det virker")
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
      alert("Login successful");
    } else {
      document.getElementById("error-message").textContent = alert(
        "E-mail eller password er desværre forkert. Prøv igen."
      );
    }
  });
