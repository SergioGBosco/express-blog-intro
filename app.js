const express = require(`express`);
const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
  res.send("server del mio blog")
});

// const postlist = [];

app.listen(port, () => {

  console.log(`Sto per creare il mio blog nella porta ${port}`)
});