// JavaScript to handle website customization
let website = {
  title: "",
  description: "",
  backgroundColor: "#1e1e1e",
  textColor: "#cccccc",
  imageUrl: ""
};

document.getElementById("background-color").addEventListener("input", function() {
  website.backgroundColor = this.value;
  document.body.style.backgroundColor = website.backgroundColor;
});

document.getElementById("text-color").addEventListener("input", function() {
  website.textColor = this.value;
  document.body.style.color = website.textColor;
});

document.getElementById("save-website").addEventListener("click", function() {
  website.title = document.getElementById("website-title").value;
  website.description = document.getElementById("website-description").value;
  
  // Send the website data to the server to be saved
  fetch("/save-website", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(website)
  })
  .then(response => response.json())
  .then(data => {
    alert("Your website has been saved!");
  });
});
