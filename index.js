const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const app = express();
const port = 8000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/v1/route', authRoute);
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(res => console.log('Connected success!!!'));
  
//Routes

app.listen(port, console.log(`Running port ${port}`));

