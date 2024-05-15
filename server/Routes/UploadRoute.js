import express from "express";
const router = express.Router();
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

//cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// upload to cloudinary
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    //console.log("Cloudinary upload result:", result.secure_url); // Log Cloudinary upload result
    const imageUrl = result.secure_url; // Get the uploaded image URL
    res.status(200).json(imageUrl); // Return Cloudinary URL
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error); // Log Cloudinary upload error
    res.status(500).json({ error: "Image upload failed" });
  }
});

/*router.post("/", upload.single("file"), async (req, res) => {
  const x = await cloudinary.uploader.upload(req.file.path);
  console.log("cloudinary", x);
  res.send("Image Uploaded!");

});*/

export default router;
