//Sovelluksen päätiedosto

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// mongodb-yhteys
mongoose.connect('mongodb://localhost/studentdb', {
    useMongoClient: true
}, function(err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

//reittien importtaus
const index = require('./routes/index');
const users = require('./routes/users');
const students = require('./routes/students');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewaren käyttöönnottoa
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); //cors kaikille reiteille

//reittien käyttöönotto
app.use('/', index);
app.use('/users', users);
app.use('/students', students);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
