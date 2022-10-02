const getInfo = require('../services/getVideoInfo');
const downloadvideo = require('../services/downloadVideo');
const ytdl = require('ytdl-core');
const { filterFileName } = require('../utils/utils');

async function info(req, res, next) {
  try {
    // ?url="https://www.youtube.com/watch?v=az8GPpaEHQY&ab_channel=Lindea"
    let { url } = req.query;
    let info = await getInfo(url);
    if (!info) return res.send('invalid video url');
    res.json(info);
  } catch (error) {
    next(error);
  }
}
async function download(req, res, next) {
  try {
    let { url, format } = req.body;
    await downloadvideo({ url, format:JSON.parse(format), res, ytdl, filterFileName });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  info,
  download,
};
