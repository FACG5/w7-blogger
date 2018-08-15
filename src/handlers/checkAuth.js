const { isAuth, error401 } = require('./isAuth.js');

function checkAuth(req, res){
    isAuth(req, res,(result)=>{
        res.writeHead(200);
        console.log('is it in? ',result);
        res.end(JSON.stringify({result}));
    });
}
module.exports = checkAuth;