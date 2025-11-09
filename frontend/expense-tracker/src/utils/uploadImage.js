import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => { 
    if (!(imageFile instanceof File)) { 
        throw new Error("uploadImage expected a File"); 
    } 
    const formData = new FormData(); 
    formData.append("image", imageFile, imageFile.name);
     // include filename 
     const res = await axiosInstance.post(
        API_PATHS.IMAGE.UPLOAD_IMAGE, 
        formData); 
        return res.data; };

export default uploadImage;