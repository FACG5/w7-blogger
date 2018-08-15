const {
  handleHomePage, handlePageNotFound, signupPage, loginPage, addpost,
} = require('./homePage.js');
const handleStaticFiles = require('./handleStaticFiles.js');

module.exports = {
  addpost,
  handleHomePage,
  handlePageNotFound,
  handleStaticFiles,
  signupPage,
  loginPage,

};

/*
  signup,
  login,
  logout,
  checkAuth,
*/
