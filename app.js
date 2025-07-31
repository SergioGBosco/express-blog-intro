const express = require(`express`);
const app = express();
const port = 3000;


//configurazione asset statici 
app.use(express.static(`public`));

app.get("/", (req, res) => {

  res.send(`server del mio blog`)
});

app.get("/bacheca", (req, res) => {
  const post = [
    {
      title: `estate`,
      content: `spiaggia`,
      img: "img/spiaggia.jpg",
      tags: ["sole", "divertimento", "mare"]
    },
    {
      title: "primavera",
      content: `al fiume`,
      img: "img/fiume.jpg",
      tags: ["felicita", "divertimento", "amore"]
    },
    {
      title: "autunno",
      content: `foglie per tera`,
      img: "img/Autunno.jpg",
      tags: ["serenita", "divertimento", "amore"]
    },
    {
      title: "Inverno",
      content: `vicino al camino`,
      img: "img/Montagna.jpg",
      tags: ["noia", "freddo", "amore"]
    },
    {
      title: "natale",
      content: `foto con l'albero`,
      img: "img/natale.jpg",
      tags: ["felicita", "divertimento", "amore"]
    }
  ];
  res.json(post);
});
app.listen(port, () => {
  console.log(`Sto per creare il mio blog nella porta ${port}`)
});
