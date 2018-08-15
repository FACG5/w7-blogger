const {
  handleHomePage, handlePageNotFound, signupPage, loginPage,
} = require('./homePage.js');
const handleStaticFiles = require('./handleStaticFiles.js');

module.exports = {

  handleHomePage,
  handlePageNotFound,
  handleStaticFiles,
  signupPage,
  loginPage,

};

/*
  handleDeletePost,
  handleStaticFiles,
  handleQuery,
  handleAddPost,
  signup,
  login,
  logout,
  checkAuth,
*/
