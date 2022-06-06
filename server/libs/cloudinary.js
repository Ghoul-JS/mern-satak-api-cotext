import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "drp8i1fbf",
    api_key: "496217133353186",
    api_secret: "UqolylY5rgLDPrjevzSDyp4L4XY"
});

export const uploadimage = async filiePath => {
    return await cloudinary.uploader.upload( filiePath, {
        folder: 'posts' 
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id);
}