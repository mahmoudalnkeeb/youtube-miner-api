const ytdl = require('ytdl-core');

/**
 * @returns {{formats:Array,thumbnails:Array,title:String,video_url:String} | false} video info or false if url is invalid
 * @param {String} url
 */
async function getInfo(url) {
  try {
    if (!ytdl.validateURL(url)) return false;
    let info = await ytdl.getInfo(url);
    return {
      formats: info.formats,
      thumbnails: info.videoDetails.thumbnails,
      title: info.videoDetails.title,
      video_url: info.videoDetails.video_url,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = getInfo;
