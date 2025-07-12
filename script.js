// script.js

// Welcoming message only for index page
window.addEventListener("DOMContentLoaded", () => {
  const welcomeDiv = document.getElementById("welcome");
  if (welcomeDiv) {
    welcomeDiv.innerHTML = "<h2>🏁 Welcome to the Porsche Car Showcase! 🏁</h2>";
  }
});

// Custom JS function that takes user input and shows a message
function showFavorite() {
  const input = document.getElementById("favModel").value.trim();
  const output = document.getElementById("output");

  if (input === "") {
    output.innerText = "Please enter a Porsche model name.";
    output.style.color = "orange";
  } else {
    output.innerHTML = `🔥 Nice choice! The <strong>${input}</strong> is truly a masterpiece. 🔥`;
    output.style.color = "#e50914";
  }
}
