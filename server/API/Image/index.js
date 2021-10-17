import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import { ImageModel } from "../../database/image";

import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

//aws S3 bucket config moved to utils/aws/s3

/*
Router		/
Description	Uploading given image to s3 bucket and saving the link to mongodb
Params		none
Access		Public
Method		Get
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        //s3 bucket options
        const bucketOptions = {
            Bucket: "shapeaijulybatch123",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };

        const uploadImage = await s3Upload(bucketOptions);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;