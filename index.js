const express = Required('express');

const app = express();

app.get('/teste', (req, res) => {
  return res.json({ hello: 'world'});
});

app.listen(3333);