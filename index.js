const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const env = require('./env')

// const port = 5000
const port = Number(env.PORT) || 5000
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

const cors = require('cors');
app.use(cors());

//link mongooseDB
// const db = require('./conf/db');
// db.main();

//route
const route = require('./routes');
route(app);



app.listen(port)
3
4