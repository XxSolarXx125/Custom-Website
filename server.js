const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Folder to save user websites
const usersWebsitesDir = path.join(__dirname, "Users-Websites");
if (!fs.existsSync(usersWebsitesDir)) {
  fs.mkdirSync(usersWebsitesDir);
}

app.post("/save-website", (req, res) => {
  const websiteData = req.body;
  const userFolder = path.join(usersWebsitesDir, "user123"); // User identifier, ideally from session or database
  
  if (!fs.existsSync(userFolder)) {
    fs.mkdirSync(userFolder);
  }
  
  // Save the website data as an HTML file
  const websiteHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${websiteData.title}</title>
    <style>
      body {
        background-color: ${websiteData.backgroundColor};
        color: ${websiteData.textColor};
      }
    </style>
  </head>
  <body>
    <h1>${websiteData.title}</h1>
    <p>${websiteData.description}</p>
    ${websiteData.imageUrl ? `<img src="${websiteData.imageUrl}" alt="Custom Image" />` : ""}
  </body>
  </html>
  `;
  
  fs.writeFileSync(path.join(userFolder, "index.html"), websiteHtml);
  res.json({ message: "Website saved successfully!" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
