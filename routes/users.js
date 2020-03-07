const express = require('express');
const route = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// BRING USER MODEL
let User = require('../models/user');

// SIGN UP ROUTE
route.get('/registr', (req, res) => {
    res.render('sign_up');
})
// SIGN UP POST
route.post('/registr', (req, res) => {
    const full_name = req.body.full_name;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;
    const vin = req.body.vin;
    const bin_iin = req.body.bin_iin;

    // if(password.length < 6){
    //     req.flash('danger', 'Пароль должен быть не меньше 6 символов')
    // }
    
    req.checkBody('full_name', 'Введите ФИО').notEmpty();
    req.checkBody('username', 'Введите номер телефона').notEmpty();
    req.checkBody('password', 'Введите пароль').notEmpty();
    req.checkBody('password2', 'Подтвердите пароль').equals(req.body.password);    
    // req.checkBody('vin', 'Введите вин-код вашего автомобиля').notEmpty();
    // req.checkBody('bin_iin', 'Введите ИИН').notEmpty();
    
    let errors = req.validationErrors();

    if(errors){
        res.render('sign_up', {
            errors: errors
        });
    } else {
        let newUser = new User({
            full_name: full_name,
            username: username,
            password: password,
            vin: vin,
            iin: bin_iin
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err){
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save((err) => {
                    if(err){
                        console.log(err);
                        return;
                    } else {
                        req.flash('success', 'You are registred and can login');
                        res.redirect('/login');
                    }
                });
            });
        });

    }

});



// SIGN IN ROUTE
route.get('/login', (req, res) => {
    res.render('sign_in');
});

route.post('/login', function(req, res, next) {
    passport.authenticate('local', {failureFlash:true}, function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { 
            req.flash('success', 'Пользователь не найден!');
            res.redirect('/login');
            return;
        }
    req.logIn(user, function(err) {
        if (err) { return next(err); }
        if (user.vin) {
            return res.redirect('/singleUserPage/id/' + user._id);
      } else {
            return res.redirect('/singleServicePage/id/' + user._id);  
      }
     
   });
  })(req, res, next);
  });

// SIGN OUT PROCESS
route.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Your successfully log out');
    res.redirect('/login');
})

module.exports = route;