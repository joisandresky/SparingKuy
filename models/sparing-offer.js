const mongoose = require('mongoose');

const SparingSchema = mongoose.Schema({
    home_team: {
        type: String
    },
    id_home_team: {
        type: String,
        required: true
    },
    away_team: {
        type: String
    },
    id_away_team: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Diajukan'
    },
    regional: {
        type: String
    }
});

const Sparing = module.exports = mongoose.model('sparing_offers', SparingSchema);

// Penawaran
module.exports.getAllPenawaran = function(id_home_team, callback){
    const query = { id_home_team: id_home_team };
    Sparing.find(query, callback);
}

module.exports.addPenawaranSparing = function(penawaran, callback){
    penawaran.save(callback);
}

module.exports.deletePenawaran = function(id, callback){
    const query = { _id: id };
    Sparing.findOne(query, callback);
}


// Tawaran
module.exports.getAllTawaran = function(id_away_team, callback){
    const query = { id_away_team: id_away_team };
    Sparing.find(query, callback);
}

module.exports.responTawaran = function(id_tawaran, respon, callback){
    const query = { _id: id_tawaran};
    Sparing.findById(query, (err, tawaran) => {
        if(err) throw err;
        tawaran.status = respon;
        tawaran.save(callback);
    });
}