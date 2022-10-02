const express = require('express');
const cors = require('cors');
const router = require('./routes');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));
app.use(router);
app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message);
    return res.status(500).send('Unknown error accured');
  }
});

// start server
const port = 3000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
