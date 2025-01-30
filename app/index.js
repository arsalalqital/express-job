const express = require('express');
const app = express();

// Pastikan variabel PORT sudah didefinisikan dengan benar
const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.send('Server berjalan dengan sukses di Railway! 🚀');
});

// Pastikan menggunakan `PORT`, bukan `port`
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan di port ${PORT}`);
});
