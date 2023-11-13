const express = require('express');
const app = express();
const port = 3000; // Le port sur lequel le serveur écoutera

app.get('/', (req, res) => {
    res.send('Bonjour, monde!');
});

app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
