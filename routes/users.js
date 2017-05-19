const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

// Model
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        regional : req.body.regional,
        contact: req.body.contact,
        usia_pemain: req.body.usia_pemain,
        team_agent: req.body.team_agent,
        email:  req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Gagal Mendaftarkan User!'});
        } else {
            res.json({success: true, msg:'Sukses Mendaftarkan User!'});
        }
    })
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;

        if(!user){
            return res.json({success: false, msg:'User tidak Ditemukan!'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;

            if(isMatch){
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 Minggu
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        regional: user.regional
                    }
                });
            } else {
                return res.json({success: false, msg:'Password yang anda Masukan Salah!'});
            }
        })
    })
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

// Tampilkan Semua team
router.get('/teams', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.getAllTeams(req.user._id, (err, teams) => {
        if(err){
            res.json({success: false, err: err})
        }else {
            res.json({success: true, teams: teams});
        }
    })
})


module.exports = router;