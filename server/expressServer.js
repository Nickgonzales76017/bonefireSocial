const express = require('express');
const app = express();
const formSubmit = require('./api/formSubmit.js');
const userInfo = require('./api/userInfo.js');
const port = 3001;
const exprServ = () => {
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use('/formSubmit', formSubmit);
    app.use('/userInfo', userInfo);
    app.listen(port, () => {
        console.log('\x1b[1m\x1b[36m','Express:','\x1b[1m\x1b[32m',`  listening on port ${port}`);
    })
    console.log('\x1b[1m\x1b[36m','Express:','\x1b[1m\x1b[32m',' server up');
    return app;
}
exports.exprServ = exprServ;