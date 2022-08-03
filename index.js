const express = require('express');
const { engine } = require('express-handlebars');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
const { db } = require('./utils/db');

const app = express();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json());

app.engine('.hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.listen(3000, 'localhost', () => {
    console.log('Localhost is ON');
});