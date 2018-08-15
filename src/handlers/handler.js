const {
  handleHomePage, handlePageNotFound, signupPage, loginPage,
} = require('./homePage.js');
const handleStaticFiles = require('./handleStaticFiles.js');
const handleAddPost = require('./handleAddPost.js');
const handleDeletePost = require('./handleDeletePost.js');
const logout = require('./logout.js');
const handleQuery = require('./handleQuery.js');

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
};

/*
  signup,
  login,
  logout,
  checkAuth,
*/
