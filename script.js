// JavaScript to handle button clicks
document.getElementById("btn-create").addEventListener("click", function() {
  document.getElementById("website-info").classList.toggle("hidden");
});

document.getElementById("btn-learn-more").addEventListener("click", function() {
  window.open("https://www.example.com", "_blank"); // Replace with your website's resources page
});
