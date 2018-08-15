
function logout(req, res) {
  res.writeHead(302, {
    Location: '/',
    'Set-Cookie': 'jwt=0; Max-Age=0',
  });
  res.end('logOut');
}

module.exports = logout;
