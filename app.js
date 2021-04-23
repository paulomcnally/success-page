const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', text: 'Finish' });
})

app.get('/finish', (req, res) => {
  res.render('finish', { title: 'Finish', message: 'Success!' });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
