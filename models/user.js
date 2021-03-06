const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    regional: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    usia_pemain: {
        type: String,
        required: true
    },
    team_agent: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

// Pencarian Lawan -> menampilkan seluruh team kecuali team yang sedang login
module.exports.getAllTeams = function(id, callback){
    User.find({_id: {$nin: id} }, callback);
}

// Tidak Dipakai karna di Handle oleh Front-end
module.exports.getAllTeamsByRegional = function(id, regional, callback){
    User.find({_id: {$nin: id}, regional: regional }, callback);
}

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = { username: username };
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.updateUser = function(id, newDataUser, callback){
    const query = { _id: id };
    User.findById(query, (err, currentUser) => {
        if(err) throw err;
        currentUser.name = newDataUser.name;
        currentUser.email = newDataUser.email;
        currentUser.usia_pemain = newDataUser.usia_pemain;
        currentUser.team_agent = newDataUser.team_agent;
        currentUser.contact = newDataUser.contact;
        currentUser.regional = newDataUser.regional;
        currentUser.save(callback);
    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}