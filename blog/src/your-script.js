// thêm thư viện  thì cần require
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); // thư mục public

app.use(
    express.urlencoded({
        extended: true,
    }),
); //middle where

app.use(express.json());
//xmlhttrequest,fetch,axios,...
// tu ban 4.16 express da cat nhat nen sd thoai mai :v body-parser

// HTTP logger

app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//routes init
route(app);

//127.0.0.1- localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`); // đây là câu lệnh trỏ vào web sever
});
