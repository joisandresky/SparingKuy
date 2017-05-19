const express = require('express');
const router = express.Router();
const passport = require('passport');

const Sparing = require('../models/sparing-offer');

router.get('/penawaran-sparing', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Sparing.getAllPenawaran(req.user._id, (err, offers) => {
        if(err){
            res.json({success: false, msg:'Gagal Melihat Penawaran yang diajukan'});
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
        regional: req.body.regional
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

module.exports = router;