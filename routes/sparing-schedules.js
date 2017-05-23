const express = require('express');
const router = express.Router();
const passport = require('passport');

const Scheduling = require('../models/Sparing-schedule');

// Route untuk Team yang Mengajukan(home team)

// Lihat Penjadwalan Sparring
router.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Scheduling.getJadwalSparring(req.user._id, (err, schedules) => {
        if(err){
            res.json({success: false, msg:'Gagal Melihat Penjadwalan Sparring!'})
        } else {
            res.json({success: true, schedules: schedules});
        }
    })
})

// Menjadwalkan Sparring
router.post('/new-sparring-schedule', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let newJadwal = new Scheduling({
        home_team: req.user.name,
        id_home_team: req.user._id,
        away_team: req.body.away_team,
        id_away_team: req.body.id_away_team,
        waktu_pertandingan: req.body.waktu_pertandingan,
        lokasi_pertandingan: {
            nama_tempat: req.body.lokasi_pertandingan.nama_tempat,
            alamat: req.body.lokasi_pertandingan.alamat
        },
    })

    Scheduling.aturJadwal(newJadwal, (err, result) => {
        if(err){
            res.json({success: false, msg:'Gagal Menjadwalkan Sparring!', err: err});
        } else {
            res.json({success: true, msg:'Berhasil Menjadwalkan Sparring!'});
        }
    });
})

// Mengubah Jadwal Sparring
router.put('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let newJadwal = {
        waktu_pertandingan: req.body.waktu_pertandingan,
        lokasi_pertandingan: {
            nama_tempat: req.body.lokasi_pertandingan.nama_tempat,
            alamat: req.body.lokasi_pertandingan.alamat
        }
    }
    Scheduling.ubahJadwalSparring(req.params.id, newJadwal, (err, result) => {
        if(err){
            res.json({success:false, msg:'Gagal Mengubah Jadwal!', err: err});
        } else {
            res.json({success: true, msg:'Berhasil Mengubah Jadwal'});
        }
    })
})

// Menghapus Jadwal
router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Scheduling.deleteJadwalSparring(req.params.id, (err, result) => {
        if(err){
            res.json({success:false, msg:'Gagal Menghapus Jadwal!'});
        } else {
            res.json({success:true, msg:'Berhasil Menghapus Jadwal!'});
        }
    })
})


// Route untuk Team yang diajak (away)
// Melihat Semua Penjadwalan Sparring
router.get('/penawaran-jadwal', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Scheduling.getJadwalMyTeam(req.user._id, (err, Jadwal) => {
        if(err){
            res.json({success:false, msg:'Gagal Memuat Tawaran jadwal', err: err});
        } else {
            res.json({success:true, schedules: jadwal});
        }
    })
})

// Merespon Jadwal sparring (belum)
router.put('/penawaran-jadwal/response/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let respon = req.body.respon;
    Scheduling.responJadwal(req.params.id, respon, (err, result) => {
        if(err){
            res.json({success: false, msg:'Gagal Merespon Jadwal!'});
        } else {
            res.json({success: true, msg:'Berhasil Merespon Jadwal!'});
        }
    })
})


// Mereschedule Tawaran Jadwal Sparing
router.put('/penawaran-jadwal/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let newJadwal = {
        waktu_pertandingan: req.body.waktu_pertandingan,
        lokasi_pertandingan: {
            nama_tempat: req.body.lokasi_pertandingan.nama_tempat,
            alamat: req.body.lokasi_pertandingan.alamat
        }
    }
    Scheduling.rescheduleJadwal(req.params.id, newJadwal, (err, result) => {
        if(err){
            res.json({success:result.success, msg:result.msg});
        } else {
            res.json({success: true, msg:'Berhasil Merespon Jadwal!'});
        }
    })
})

module.exports = router;