const {
  handleHomePage, handlePageNotFound, signupPage, loginPage,
} = require('./homePage.js');
const handleStaticFiles = require('./handleStaticFiles.js');
const handleAddPost = require('./handleAddPost.js');
const handleDeletePost = require('./handleDeletePost.js');
const logout = require('./logout.js');
const handleQuery = require('./handleQuery.js');
const { isAuth, error401 } = require('./isAuth.js');
const { login } = require('./login.js');

module.exports = {
  handleQuery,
  handleDeletePost,
  handleHomePage,
  handlePageNotFound,
  handleStaticFiles,
  signupPage,
  loginPage,
  handleAddPost,
  logout,
  isAuth,
  login,
  error401,
};

/*
  signup,
  login,
  logout,
  checkAuth,
*/
