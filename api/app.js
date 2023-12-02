const express = require('express');
const Redis = require('ioredis');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 3000;


const redis = new Redis({
  host: 'redis',
  port: 6379,
});


app.use(bodyParser.json());

app.use(cors());


app.post('/wishlist/add', (req, res) => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ error: 'Parâmetros inválidos.' });
  }


  redis.sadd(`wishlist:${userId}`, productId, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao adicionar o item à wishlist.' });
    }

    return res.json({ success: true, message: 'Item adicionado à wishlist com sucesso.' });
  });
});


app.get('/wishlist/:userId', (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ error: 'Parâmetros inválidos.' });
  }

 
  redis.smembers(`wishlist:${userId}`, (err, wishlist) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao obter a wishlist.' });
    }

    return res.json({ userId, wishlist });
  });
});


app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
