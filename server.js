const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve your index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// /log endpoint to store data
app.post('/log', (req, res) => {
  const data = req.body.key;
  if (data) {
    fs.appendFileSync('log.txt', data + '\n');
    console.log('Logged:', data);
  }
  res.send('OK');
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
