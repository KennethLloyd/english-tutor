import multer from 'multer';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';
import storage from '../helpers/multer-storage.js';
import { loadConfig } from '../helpers/utils.js';

const upload = multer({ storage }).single('image');

const uploadImage = async (req, res, next) => {
  const config = await loadConfig();

  upload(req, res, function (err) {
    if (err) {
      console.log('Upload failed', err);
      return next(err);
    }

    if (!req.file) {
      delete req.body.image;
      return next();
    }

    cloudinary.config({
      cloud_name: config.cloudinaryName,
      api_key: config.cloudinaryApiKey,
      api_secret: config.cloudinaryApiSecret,
    });

    const path = req.file.path;
    const uniqueFilename = `${new Date().getTime()}-${req.file.originalname}`;

    cloudinary.uploader.upload(
      path,
      { public_id: `${config.cloudinaryFolder}/${uniqueFilename}` },
      function (err, image) {
        if (err) {
          console.log(err);
          return next(err);
        }

        req.imageUrl = image.secure_url;

        // remove file from server
        fs.unlinkSync(path);

        next();
      },
    );
  });
};

export default uploadImage;
