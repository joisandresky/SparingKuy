const express = require('express');
const router = express.Router();

const sparingBoards = require('../models/sparing-board');

router.get('/', (req, res, next) => {
    sparingBoards.getAllMatch((err, matchs) => {
        if(err){
            res.json({success: false, msg:'Terjadi Error Meload Pertandingan', error: err});
        }else {
            res.json({success: true, match: matchs});
        }
    });
});

router.get('/:id', (req, res, next) => {
    sparingBoards.getMatchById(req.params.id, (err, match) => {
        if(err){
            res.json({success: false, msg:'Pertandingan tidak dietemukan!'});
        }else{
            res.json({success:true, match: match});
        }
    })
});

router.post('/', (req, res, next) => {
    let lokasi = {
        nama_tempat: req.body.nama_tempat,
        alamat: req.body.alamat_tempat,
    }
    let newMatch = new sparingBoards({
        home_team: req.body.home_team,
        away_team: req.body.away_team,
        waktu_pertandingan: req.body.waktu_pertandingan,
        lokasi_pertandingan: lokasi,
        regional: req.body.regional
    });

    sparingBoards.addNewMatch(newMatch, (err, match) => {
        if(err){
            res.json({success: false, msg:'Gagal Membuat Pertandingan'});
        }else{
            res.json({success: true, msg:'Berhasil Menyimpan Pertandingan'});
        }
    })
})

router.delete('/:id', (req, res, next) => {
    sparingBoards.deleteMatch(req.params.id, (err, doc) => {
        if(err){
            res.json({success:false, msg:'Gagal Menghapus Pertandingan'});
        }else {
            res.json({success: true, msg:'Sukses Menghapus Pertandingan'});
        }
    })
})

module.exports = router;