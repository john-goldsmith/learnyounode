var fs = require("fs"),
    path = require("path");

module.exports = function(dir, ext, callback){

  fs.readdir(dir, function(err, files){
    if (err) return callback(err);
    data = [];
    files.forEach(function(file, index, array){
      if (path.extname(file) === "." + ext) data.push(file);
    });
    return callback(null, data);
  });

}