const express = require ('express');
const app = express();
var cors=require('cors');
var db = require('./db');

const PORT = 3000 ;
const controller = require("./controller");
//app.use(express.static('client/dist'));
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3001']}))

app.post('/meters/METER_ID', controller.postId);
app.post('/meters', controller.post);
app.get('/meters', controller.get);
app.get('/meters/METER_ID', controller.getId);
//app.put('/movies/', controller.patch);

app.listen(PORT, () => {
  console.log(`Server listening on port: 3000`);
})