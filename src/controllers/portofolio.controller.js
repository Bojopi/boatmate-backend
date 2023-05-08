import { response } from "express";
import { uploadImages } from "../utils/cloudinary.js";

export const uploadPortofolio = async (req, res = response) => {
    const { images } = req.files;

    const { idProvider } = req.params;

    try {
        const response = await uploadImages(idProvider, images);
        console.log(response)
    } catch (error) {
        res.status(401).json({msg: error})
    }

}