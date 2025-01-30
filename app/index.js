
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Selamat datang di halaman utama!');
});


app.get('/tentang', (req, res) => {
  res.send('Ini adalah halaman tentang kami.');
});


app.get('/kontak', (req, res) => {
  res.send('Hubungi kami di kontak@example.com.');
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});