const fs = require("fs");
const path = require("path");

/**
 * Delete all matching files in a folder
 * @param {string} rootPath The root path of the folder to be deleted
 * @param {RegExp} regLab The file name to be deleted matches the regular
 */
const rfAimFile = (rootPath, regLab) => {
  const loop = (rootPath) => {
    fs.readdir(rootPath, (err, names) => {
      if (err) throw err;
      names.forEach((name) => {
        const sonPath = path.join(rootPath, name);
        const isDir = fs.lstatSync(sonPath).isDirectory();
        isDir ? loop(sonPath) : regLab.test(name) && fs.unlink(sonPath, (err) => err);
      });
    });
  };
  loop(rootPath);
};

export default rfAimFile;
