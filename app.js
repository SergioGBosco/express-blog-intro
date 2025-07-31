const express = require(`express`);
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const post = [{
    title: `estate`,
    content: `spiaggia`,
    img: `http......`,
    tags: ["sole", "divertimento", "mare"]
  },
  {
    title: "primavera",
    content: `al fiume`,
    img: `http:.....`,
    tags: ["felicita", "divertimento", "amore"]
  },
  {
    title: "autunno",
    content: `in montagna`,
    img: `http:.....`,
    tags: ["serenita", "divertimento", "amore"]
  },
  {
    title: "Inverno",
    content: `vicino al camino`,
    img: `http:.....`,
    tags: ["noia", "freddo", "amore"]
  },
  {
    title: "natale",
    content: `foto con l'albero`,
    img: `http:.....`,
    tags: ["felicita", "divertimento", "amore"]
  },


  ];
  res.send(post);
})
app.listen(port, () => {
  console.log(`Sto per creare il mio blog nella porta ${port}`)
});
