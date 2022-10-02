exports.filterFileName = function filterFileName(filename) {
  let invalidChars = '"M"\\a/ry/ h**ad:>> a\\/:*?"| li*tt|le|| la"mb.?';
  return filename.replace(invalidChars, '_').replace(' ', '_');
};
