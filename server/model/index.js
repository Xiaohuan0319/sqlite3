var db = require('../db');
module.exports = {
  // getAll : function (callback) {
  //   var sql = ''
  // },

  post : function (param, callback ) {
    var sql = `INSERT INTO meters (label) VALUES ( ?)`;
    db.run(sql, param, function ( err, data) {
      if (err) {
        callback(err);
      }else {
        callback(null, 201);
      }
    })
  },
  postId : function (param, callback ) {
    console.log('test');
    var sql = `INSERT INTO meter_data (timestampM,  valueM , meter_id ) VALUES (?, ?, ?)`;
    db.run(sql, param, function ( err, data) {
      if (err) {
        callback(err);
      }else {
        callback(null, 201);
      }
    })
  },
  get: function ( callback) {
    var sql = `select * from meters`;
    db.all(sql,[], function( err, data) {
      if (err) {
        callback(err);
      }else {
        console.log(data);
        callback(null, data);
      }
    })
  },
  getId : function (id, callback) {
    var sql = `select * from meter_data where meter_id =${id}`;
    db.all(sql,[], function( err, data) {
      if (err) {
        callback(err);
      }else {
        console.log(data);
        callback(null, data);
      }
    })
  }
}