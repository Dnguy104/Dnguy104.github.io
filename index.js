

// var express = require('express');
// var app = express();

// app.set('view engine', 'ejs');
// //app.use(express.static(__dirname + '/public'));
// //app.use('/', express.static('./images'));
// app.use("/css",express.static(__dirname + "/css"));
// app.use("/js",express.static(__dirname + "/js"));

// app.get('/', function(req, res){
// 	console.log(req.url);
// 	res.render('pages/index');
// });

// app.get('pic.jpg', function(req, res){
// 	res.sendFile(__dirname + '/images/pic.jpg')
// });

// app.get('/resume', function(req, res){
// 	res.sendFile(__dirname + '/images/CV.pdf')
// });

// app.get('/contact', function(req, res){
// 	res.render('pages/contact');
// });

// app.get('/about', function(req, res){
// 	res.render('pages/about');
// });

// app.listen(3000);
// console.log('3000 is the magic port');

var express = require('express');

var engine = require('ejs-locals');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var contact = require('./routes/contact');
var project = require('./routes/project');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', routes);
app.use('/contact', contact);
app.use('/project', project);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port');

//module.exports = app;