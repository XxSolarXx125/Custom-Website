// JavaScript for handling the website generation
document.getElementById("generate-site").addEventListener("click", function() {
  const title = document.getElementById("site-title").value;
  const description = document.getElementById("site-description").value;

  if (title && description) {
    document.getElementById("custom-title").innerText = title;
    document.getElementById("custom-description").innerText = description;

    // Show the generated website
    document.getElementById("generated-website").classList.remove("hidden");
  } else {
    alert("Please enter both a title and description.");
  }
});

// Optional: Implement download functionality for the generated website (for demo purposes)
document.getElementById("download").addEventListener("click", function() {
  const title = document.getElementById("site-title").value;
  const description = document.getElementById("site-description").value;
  
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body style="background-color: #1d1d1d; color: white; text-align: center;">
    <h1>${title}</h1>
    <p>${description}</p>
  </body>
  </html>
  `;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${title.replace(/\s+/g, '_')}.html`;
  link.click();
});
