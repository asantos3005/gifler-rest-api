const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadToS3(localFilePath, bucketName, key) {
  const fileStream = fs.createReadStream(localFilePath);

  const uploadParams = {
    Bucket: bucketName,
    Key: key,
    Body: fileStream,
    ContentType: 'image/gif',
  };

  const command = new PutObjectCommand(uploadParams);

  try {
    const response = await s3.send(command);
    console.log('Upload successful:', response);
    return response;
  } catch (err) {
    console.error('S3 upload failed:', err);
    throw err; // re-throw if needed by calling function
  }
}

module.exports = { uploadToS3 };