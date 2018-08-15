const {
  handleDeletePost, handleStaticFiles, handleQuery, handleAddPost, handleHomePage,
  handlePageNotFound, signup, signupPage, loginPage, logout, checkAuth,
} = require('./handlers/handler.js');

const {login } = require ('./handlers/login.js');

const router = (req, res) => {
  const endpoint = req.url;
  const { method } = req;
  if (endpoint === '/') {
    handleHomePage(req, res);
  } else if (endpoint === '/getposts') {
    handleQuery(req, res);
  } else if (endpoint === '/logout') {
    logout(req, res);
  } else if (endpoint === '/addpost') {
    handleAddPost(req, res);
  } else if (endpoint === '/deletepost') {
    handleDeletePost(req, res);
  } else if (endpoint === '/signup' && method === 'GET') {
    signupPage(req, res);
  } else if (endpoint === '/signup' && method === 'POST') {
    signup(req, res);
  } else if (endpoint === '/login' && method === 'GET') {
    loginPage(req, res);
  } else if (endpoint === '/login' && method === 'POST') {
    login(req, res);
  } else if (endpoint === '/checkauth') {
    checkAuth(req, res);
  } else if (endpoint.includes('/public')) {
    handleStaticFiles(req, res);
  } else {
    handlePageNotFound(req, res);
  }
};

module.exports = router;
