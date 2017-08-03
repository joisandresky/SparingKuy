const mongoose = require('mongoose');

const SparScheduleSchema = mongoose.Schema({
    home_team: String,
    id_home_team: {type: String, required: true},
    away_team: String,
    id_away_team: {type: String, required: true},
    waktu_pertandingan: Date,
    lokasi_pertandingan: {
        nama_tempat: {type: String, required: true},
        alamat: {type: String, required: true}
    },
    away_email: {
        type: String,
        required: true
    },
    tanggal_penjadwalan: {
        type: Date,
        default: Date.now
    },
    status: {type: String, required: true, default:'Diajukan'},
    rescheduled: {type: Boolean, required: true, default: false},
    nego_count: {type: Number, required: true, default: 0},
    team_respond: {type: Boolean, required: true, default: false}
})

const SparSchedule = module.exports = mongoose.model('Sparing_schedule', SparScheduleSchema);

// Untuk Home Team
// Atur Jadwal Sparring
module.exports.aturJadwal = function(jadwal, callback){
    jadwal.save(callback);
}

// Menampilkan Jadwal Sparring(home_team)
module.exports.getJadwalSparring = function(id_home_team, callback){
    SparSchedule.find({id_home_team: id_home_team}, callback);
}

// Mengubah Jadwal Sparring
module.exports.ubahJadwalSparring = function(id, jadwal, callback){
    SparSchedule.findById({_id: id}, (err, jadwalLama) => {
        jadwalLama.waktu_pertandingan = jadwal.waktu_pertandingan;
        jadwalLama.lokasi_pertandingan = jadwal.lokasi_pertandingan;
        jadwalLama.nego_count += 1;
        jadwalLama.save(callback);
    });
}

// Menghapus Jadwal
module.exports.deleteJadwalSparring = function(id, callback){
    SparSchedule.findByIdAndRemove({_id: id}, callback);
}


// Untuk Away Team
// Menampilkan Jadwal Sparring(away_team)
module.exports.getJadwalMyTeam = function(id_away_team, callback){
    SparSchedule.find({id_away_team: id_away_team}, callback);
}

// Merespon Tawaran Jadwal
module.exports.responJadwal = function(id, respon, callback){
    SparSchedule.findOne({_id: id}, (err, jadwal) => {
        if(err) throw err;
        jadwal.status = respon;
        jadwal.save(callback);
    })
}

// Mereschedule Tawaran Jadwal
module.exports.rescheduleJadwal = function(id, respon, callback){
    SparSchedule.findOne({_id: id}, (err, jadwal) => {
        jadwal.waktu_pertandingan = respon.waktu_pertandingan;
        jadwal.lokasi_pertandingan = respon.lokasi_pertandingan;
        jadwal.nego_count += 1;
        jadwal.rescheduled = true;

        if(jadwal.nego_count > 3){
            res.json({success: false, msg:'Sudah Melebihi Batas Maksimal reschedule!'})
        } else {
            jadwal.save(callback);
        }
    })
}