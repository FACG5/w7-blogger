const fs = require('fs');
const path = require('path');

function handlePageNotFound(req, res) {
  fs.readFile(path.join(__dirname, '..', '..', 'public', 'error404.html'), (err, data) => {
    res.writeHead(404, { 'content-type': 'text/html' });
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.end(data);
  });
}

function handleHomePage(req, res) {
  fs.readFile(path.join(__dirname, '..', '..', 'public', 'index.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(data);
  });
}

function loginPage(req, res) {
  fs.readFile(path.join(__dirname, '..', '..', 'public', 'html', 'login.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(data);
  });
}

function signupPage(req, res) {
  fs.readFile(path.join(__dirname, '..', '..', 'public', 'html', 'signup.html'), (err, data) => {
    if (err) {
      res.end(JSON.stringify(err));
    }
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(data);
  });
}

module.exports = {
  handleHomePage,
  handlePageNotFound,
  signupPage,
  loginPage,
};
