const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');

const passport = require('passport');
const config = require('./config/database');

const geoIP = require('express-simple-geoip');

// MONGO DB 
mongoose.connect(config.database, {useUnifiedTopology: true, useNewUrlParser: true});
let db = mongoose.connection;

db.once('open', ()=> {
    console.log('connected to MLab MongoDB');
});
db.on('err', () => {
    console.log(err);
})

// APP ENGINE
const app = express();

// app.use(geoIP('https://geo.ipify.org/api/v1?apiKey=at_d6MRATCaMXNpLImvHujEXxIOuYnta&ipAddress=8.8.8.8'));

// app.get('/test', (req, res) => {
//     res.send({geoIP: req.geoip});
// })

//SET VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//BODY PARSER MIDDLEWARE
//PARSE APPLICATION URLENCODED
app.use(bodyParser.urlencoded({ extended: false}));
//PARSE APPLICATION/JSON
app.use(bodyParser.json());

//SET PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// EXPRESS SESSION
app.use(session({
    secret: 'cat',
    resave: true,
    saveUninitialized: true,
}));

// EXPRESS MESSAGES MIDDLEWARE
app.use(require('connect-flash')());
app.use(function(req, res, next){
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// EXPRESS VALIDATOR
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;

        while(namespace.length){
            formParam += '[' + namespace.shift() + ']';
        }
        return{
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

// PASSPORT CONFIG
require('./config/passport')(passport);
// PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
})

// ROUTE FILES
let users = require('./routes/users');
app.use('/', users);

// USER MODELS
let User = require('./models/user');

// CLIENT MODELS
let Client = require('./models/clientModel');
// SERVICE MODELS
let Service = require('./models/serviceModel');

// HOME ROUTE
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/singleUserPage/id/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        Client.find({user_id: req.params.id}, (err, clients) => {
            if(err){
                console.log(err);
            } else {
                res.render('singleUserPage', {
                    user: user,
                    clients: clients
                });
            }
        })
    })
})


app.get('/singleUserPage/id/:id/add-new-order', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err) {
            console.log(err);
        } else {
            res.render('addNewOrder', {
                user: user
            })
        }
    })
})

app.post('/singleUserPage/id/:id/add-new-order', (req, res) => {
    let client = new Client();
    client.user_id = req.params.id; 
    client.title = req.body.title;
    client.detail = req.body.detail;
    client.category = req.body.category;
    client.date.hour = req.body.hour + ' часов';
    client.date.day = req.body.day + ' дней';
    client.date.minute = req.body.minute + ' минут';
    client.car = req.body.car;
    client.mycar = req.body.mycar;
    client.city = req.body.city;
    client.cost = req.body.cost;

    client.save((err) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/singleUserPage/id/' + req.params.id)
        }
    })
})


app.get('/singleServicePage/id/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        Client.find({city: req.query.cities}, (err, clients) => {
            if(err){
                console.log(err);
            } else {
                res.render('singleServicePage', {
                    user: user,
                    clients: clients
                });
            }
        })
    })
})

app.get('/singleServicePage/id/:id/detailInformationAboutNewOrder/id/:ii', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        Client.findById(req.params.ii, (err, client) => {
            if(err){
                console.log(err);
            } else {
                res.render('serviceDetailPage', {
                    user: user,
                    client: client
                })
            }
        })
    })
})

app.get('/singleServicePage/id/:id/detailInformationAboutMe', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err) {
            console.log(err);
        } else {
            res.render('serviceAccount', {
                user: user
            });
        }
    })
})

app.get('/search', enAuth, (req, res) => {
    res.render('search')
})


// ENSURE AUTH
function enAuth(req, res, next) {
    if(req.isAuthenticated()){
        next();
    } else{
        req.flash('danger', 'Please login');
        res.redirect('/login');
    }
}

// SERVER START
const PORT = 4444;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});