const mongoose = require('mongoose');

const sparingBoardSchema = mongoose.Schema({
    home_team: {
        type: String
    },
    away_team: {
        type: String
    },
    waktu_pertandingan: {
        type: Date
    },
    lokasi_pertandingan: {
        nama_tempat: {
            type: String
        },
        alamat: {
            type: String
        }
    },
    regional: {
        type: String
    }
});

const sparingBoard = module.exports = mongoose.model('sparing_board', sparingBoardSchema);

module.exports.getAllMatch = function(callback){
    sparingBoard.find(callback);
}

module.exports.getMatchById = function(id, callback){
    sparingBoard.findById(id, callback);
}

module.exports.addNewMatch = function(match, callback){
    match.save(callback);
}

module.exports.deleteMatch = function(id, callback){
    sparingBoard.findByIdAndRemove({_id: id}, callback);
}