const express = Required('express');

const app = express();

app.get('/teste', (req, res) => {
  return res.json({ hello: 'world 2'});
});

app.listen(3333);