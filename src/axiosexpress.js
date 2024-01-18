const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const axios = require('axios');

app.use(bodyParser.json());

let lampuStatus = false;

// Endpoint untuk menghidupkan lampu
app.post('/api/lampu/on', (req, res) => {
  // Kirim permintaan ke ESP8266 untuk menghidupkan lampu
  axios.post('http://alamat-esp8266/api/lampu/on')
    .then(response => {
      lampuStatus = true;
      res.json({ status: 'Lampu dinyalakan' });
    })
    .catch(error => {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Gagal menghidupkan lampu' });
    });
});

// Endpoint untuk mematikan lampu
app.post('/api/lampu/off', (req, res) => {
  // Kirim permintaan ke ESP8266 untuk mematikan lampu
  axios.post('http://alamat-esp8266/api/lampu/off')
    .then(response => {
      lampuStatus = false;
      res.json({ status: 'Lampu dimatikan' });
    })
    .catch(error => {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Gagal mematikan lampu' });
    });
});

// Endpoint untuk mendapatkan status lampu
app.get('/api/lampu/status', (req, res) => {
  res.json({ status: lampuStatus });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
