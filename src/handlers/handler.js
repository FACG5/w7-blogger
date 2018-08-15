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
<<<<<<< HEAD
  handleAddPost,
  logout,
=======
  isAuth,
  login,
  error401,
>>>>>>> b4805cb60e94b66eda20877469cd5d024edb356c
};

/*
  signup,
  login,
  logout,
  checkAuth,
*/
