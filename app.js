const express = require('express');
const multer  = require('multer')
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'client/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage: storage })
const app = express();
const fs = require('fs');

app.use(express.static(__dirname + '/client'));

app.post('/uploadImage', upload.single('file'), function (req, res, next) {
  console.log(req.file)
})
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(3000);
console.log('App listening on port 3000');
