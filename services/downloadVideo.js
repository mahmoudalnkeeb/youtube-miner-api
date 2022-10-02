const { createDownload } = require('../models/download');

async function downloadvideo({ url, format, res, ytdl, filterFileName }) {
  try {
    if (!ytdl.validateURL(url)) return false;

    let info = await ytdl.getInfo(url);
    let filename = `${filterFileName(info.videoDetails.title)}.${
      format.container
    }`;
    // this region add new download to database
    await createDownload(url, format.qualityLabel, format.container);
    // end
    res.attachment(filename);
    ytdl(url, { format }).pipe(res);
  } catch (error) {
    throw error;
  }
}

module.exports = downloadvideo;
