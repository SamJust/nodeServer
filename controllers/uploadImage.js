const multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './savedImages/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage })

module.exports = (app)=>{
  app.post('/upload/image', upload.single('file'), (req, res)=>{
    res.send('file sent')
  });
};
