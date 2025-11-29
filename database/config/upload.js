import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!file) return reject("File is missing");

      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "products", // preset remove
          resource_type: "image",
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            return reject(error);
          }
          resolve(result.secure_url);
        }
      );

      uploadStream.end(buffer);
    } catch (error) {
      reject(error);
    }
  });
};
