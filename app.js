const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Route par défaut
app.get('/', (req, res) => {
  res.send('Marcellin est le meilleur !');
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`);
});
