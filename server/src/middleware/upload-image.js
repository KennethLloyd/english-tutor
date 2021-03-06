import multer from 'multer';
import config from 'config';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';
import storage from '../helpers/multer-storage.js';

const upload = multer({ storage }).single('image');

const uploadImage = (req, res, next) => {
  upload(req, res, function(err) {
    if (err) {
      console.log('Upload failed', err);
      return next(err);
    }

    if (!req.file) return next();

    cloudinary.config({
      cloud_name: config.get('cloudinaryName'),
      api_key: config.get('cloudinaryApiKey'),
      api_secret: config.get('cloudinaryApiSecret'),
    })

    const path = req.file.path
    const uniqueFilename = `${new Date().getTime()}-${req.file.originalname}`

    cloudinary.uploader.upload(
      path,
      { public_id: `${config.get('cloudinaryFolder')}/${uniqueFilename}` },
      function(err, image) {
        if (err) {
          console.log(err);
          return next(err);
        }

        req.imageUrl = image.secure_url;

        // remove file from server
        fs.unlinkSync(path)

        next();
      }
    )
  })
}

export default uploadImage;