const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'studygurucommunity@gmail.com',
            pass: '1234@abcd'
        }
    }
);

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    //console.log("In register");
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.role = req.body.role;
    user.save((err, doc) => {
        if (!err) {
            var mailOptions = {
                from: 'studygurucommunity@gmail.com',
                to: req.body.email,
                subject: 'User registration',
                text: 'Wellcome to Studyguru community!!!'
            };
            /*transporter.sendMail(mailOptions,function(error,info){
                if(error){
                    console.log(error)
                }
                else{
                    console.log('Email sent '+ info.response);
                }
                
            });*/
            res.send(doc);
        }

        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.list = (req, res, next) => {
    User.find(function (err, users) {
        if (err) {
            res.status(400);
            res.send("Unable to find names");
        }
        else {
            console.log("All users returned");
            res.send(users);
        }
    });
}

module.exports.deleteUser = (req, res) => {
    User.findOne({ 'email': req.params.email }, function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            user.remove();
            res.send({"message":"User removed"});
        }
    });
}

module.exports.updateUser=(req,res)=>{
    User.findOne({'email':req.body.email},function(err,user){
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            user.fullName = req.body.fullName;
            user.role = req.body.role;
            
        }

        user.save(function (err) {
            if (err) {
                console.log("Unable to update user");
                res.status(400);
                res.send("Unable to update user");
            }
            else {
                console.log("user  updated successfully");
                res.send({ "message": "user  updated successfully" });
            }
        });
    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email', 'role']) });
        }
    );
}
