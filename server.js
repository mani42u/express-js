import express from 'express'
import db from './db.js';
import bodyParser from 'body-parser';
import Person from './models/person.js';
import Menu from './models/Menu.js';

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send('<h1>Welcome to my hotel</h1>')
})


import personRoutes from './routes/personRoutes.js';
app.use('/',personRoutes);

import menuRoutes from './routes/menuRoutes.js';
app.use('/',menuRoutes);



app.listen(3000,() => {
    console.log('app is runnig on port : 3000');
})