async function handleFormSubmission(e) {
  e.preventDefault();
  console.log(`inside form submission`);
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  //   checking if both fields have been entered and sending a post request
  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".login-form").addEventListener("submit", (e) => {
  handleFormSubmission(e);
});
