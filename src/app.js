const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cloudinary = require("cloudinary").v2
const fileUpload = require("express-fileupload")
require('dotenv').config();

const middlewares = require('./middlewares');
const routes = require('./Routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(fileUpload({
  useTempFiles :true,
  limits:{fileSize:50 * 2024 * 1024}
}));
app.get('/', (req, res) => {
  res.json({
    message: 'Home',
  });
});
cloudinary.config({ 
  cloud_name: 'dmp0jqudm', 
  api_key: '165187214116185', 
  api_secret: 'QQ2fjUmxhIZaMsuYq2ExlfKC3dA' 
});

app.post("/upload/cloud", async(req,res)=>{
  const file = req.files.image;
  const result = await cloudinary.uploader.upload(file.tempFilePath,{
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images"
  })
  res.json(result.url);
})

app.post("/upload/", async(req,res)=>{
  const file = req.files.video;
  const result = await cloudinary.uploader.upload(file.tempFilePath,{
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "videos"
  })
  res.json(result.url);
})


app.use('/root/', routes);


function start(port) {
  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  });
}

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = {
  app,
  start,
};
