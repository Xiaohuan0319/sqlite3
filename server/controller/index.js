var model = require ('../model');
module.exports = {
  post : function ( req, res) {
    console.log('test0');
    var param = [req.body.label];
    model.post( param, (err, data) => {
      if (err) {
        res.send(err);
      }else{
        res.send(data);
      }
    })
  },
  postId :function ( req, res) {

    var id = parseInt(req.query.id);
    console.log('idddd', id);
    var param = [req.body.timestamp, req.body.value, id ];
    console.log('idddd', param);
    model.postId (param, (err, data) => {
      if (err) {
        res.send(err);
      }else {
        res.send(data);
      }
    })
  },
  get :function (req, res) {
    console.log('testget');
   model.get( (err, data) => {
     if (err) {
       res.send(err);
     }else {
       res.send(data);
     }
   })
  },
  getId :function (req, res) {
    var id = parseInt(req.query.id);
    console.log('idddd;');
    model.getId(id, (err, data) => {
      if (err) {
        res.send(err);
      }else {
        res.send(data);
      }
    })
   },


}