const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies


// Serve the index.html file on the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the login form submission
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check the username and password
  if (username === 'admin' && password === 'admin123') {
    // Redirect to success page
    res.redirect('/success');
  } else {
    // Redirect to failure page
    res.redirect('/failure');
  }
});

// Serve the success page
app.get('/success', (req, res) => {
  res.send('<h1>Login Successful!</h1>');
});

// Serve the failure page
app.get('/failure', (req, res) => {
  res.send('<h1>Login Failed!</h1>');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
