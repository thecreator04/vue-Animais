const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routes');
const cors = require('cors');
const animals = require('./router/api/AnimalRouter')



const app = express();


//Middleware
app.use(bodyParser.json());

app.use(cors());

const port = process.env.PORT || 3000;

app.use(cors())

app.use('/', animals)

app.get('/', router )
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
