const express = require('express');
const router = express.Router();
const passport = require('passport');

const Sparing = require('../models/sparing-offer');


// Route untuk Penawaran(user yang mengajukan tawaran sparing)
router.get('/penawaran-sparing', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Sparing.getAllPenawaran(req.user._id, (err, offers) => {
        if(err){
            res.json({success: false, msg:'Gagal Melihat Penawaran'});
        } else {
            res.json({success:true, offers: offers});
        }
    })
})

router.post('/penawaran-sparing', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let Offer = new Sparing({
        home_team: req.user.name,
        id_home_team: req.user._id,
        away_team: req.body.away_team,
        id_away_team: req.body.id_away_team,
        home_regional: req.user.regional,
        away_regional: req.body.away_regional
    });

    Sparing.addPenawaranSparing(Offer, (err, offer) => {
        if(err){
            res.json({success: false, msg:'Gagal Membuat Penawaran Sparing'});
            console.log(Offer);
        }else {
            res.json({success: true, msg:'Berhasil Mengajukan Penawaran'});
        }
    })
})

router.delete('/penawaran-sparing/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Sparing.deletePenawaran(req.params.id, (err, result) => {
        if(err){
            res.json({success: false, msg:'Gagal Menghapus Penawaran', err: err});
        } else {
            res.json({success: true, msg:'Berhasil Menghapus Penawaran'});
        }
    })
})


// Route untuk Tawaran(user yang di ajak untuk sparing)
router.get('/tawaran-sparing', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Sparing.getAllTawaran(req.user._id, (err, bids) => {
        if(err){
            res.json({success: false, msg:'Gagal melihat Tawaran Sparing'});
        } else {
            res.json({success: true, bids: bids});
        }
    })
})

router.put('/tawaran-sparing/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let respon = req.body.responTawaran;
    Sparing.responTawaran(req.params.id, respon, (err, tawaran) => {
        if(err){
            res.json({success: false, msg:'Gagal Mencari tawaran'});
        } else {
            res.json({success: true, msg:'Berhasil Merespon tawaran'});
        }
    })
})

module.exports = router;