const sequelize = require('../configs/sequelize');
const { DataTypes } = require('sequelize');

async function getModel() {
  let download = sequelize.define(
    'download',
    {
      videoLink: DataTypes.STRING,
      quality: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    { tableName: 'downloads' }
  );
  await download.sync();
  return download;
}

// CREATE
async function createDownload(videoLink, quality, type) {
  let downloads = await getModel();
  let download = await downloads.create({ videoLink, quality, type });
  return download;
}

// READ
async function getMostDownloadedVideo() {}

// READ
async function getDownloadsCount() {}

// READ
async function getMostDownloadedQuality() {}

// READ
async function getMostDownloadedType() {}

module.exports = {
  createDownload,
  getMostDownloadedVideo,
  getDownloadsCount,
  getMostDownloadedQuality,
  getMostDownloadedType,
};
