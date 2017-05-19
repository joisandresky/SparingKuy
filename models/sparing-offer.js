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

module.exports.getAllPenawaran = function(id_home_team, callback){
    const query = { id_home_team: id_home_team };
    Sparing.find(query, callback);
}

module.exports.addPenawaranSparing = function(penawaran, callback){
    penawaran.save(callback);
}

module.exports.getAllTawaran = function(id_away_team, callback){
    const query = { id_away_team: id_away_team };
    Sparing.find(query, callback);
}