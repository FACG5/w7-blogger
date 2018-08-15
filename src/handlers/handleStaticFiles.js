const fs = require('fs');
const path = require('path');


function handleStaticFiles(req, res) {
  const endponit = req.url;
  const extention = endponit.split('.')[1];
  const contentType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    jpg: 'image/jpg',
    png: 'image/png',
    gif: 'image/gif',
    jpeg: 'image/jpeg',
  };
  res.writeHead(200, {
    'content-type': contentType[extention],
  });
  fs.readFile(path.join(__dirname, '..','..', endponit), (err, file) => {
    if (err) {
      res.end(err.message);
    } else {
      res.end(file);
    }
  });
}

module.exports =  handleStaticFiles;
