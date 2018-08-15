const { isAuth, error401 } = require('./isAuth.js');

function checkAuth(req, res){
    isAuth(req, res,(result)=>{
        res.writeHead(200);
        res.end(JSON.stringify({result}));
    });
}
module.exports = checkAuth;