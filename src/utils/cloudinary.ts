// utils/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const deleteImageFromCloudinary = async (publicId: string) => {
  return await cloudinary.uploader.destroy(publicId);
};

export const uploadImageToCloudinary = async (filePath: string) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "theruvu-taste",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 800, height: 800, crop: "limit" }],
  });
};