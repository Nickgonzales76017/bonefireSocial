const express = require('express');
const {insertUsers, deleateUser, updateUser, selectUser,  query} = require('../db/db.js');
const router = express.Router();
const clients_express = new Map();
//const sql = db.query();
// middleware that is specific to this router
router.use((_req, _res, next) => {
  console.log('\x1b[1m\x1b[36m','formSubmit Timestamp: ','\x1b[1m\x1b[34m', Date.now());
  next();
});
// define the home page route
router.get('/', (_req, res) => {
    console.log('\x1b[1m\x1b[36m','get: ','\x1b[1m\x1b[31m',' /formSubmit');
    console.log('\x1b[1m\x1b[36m','get:formSubmit:_req','\x1b[1m\x1b[31m',_req.body);
    
    res.status(200).send('Birds home page')
})
router.post('/',(_req, res) => {
    console.log('\x1b[1m\x1b[36m','post: ','\x1b[1m\x1b[32m',' /formSubmit');
    console.log('\x1b[1m\x1b[36m','post:formSubmit:_req','\x1b[1m\x1b[32m',_req.body);
    insertUsers(_req.body).then((value) => {
        console.log(value);
        if(value){
            const metadata = { 'id': value, 'logged_in': 1, 'ws': 0};
            clients_express.set(value, metadata);
            res.status(200).send(value)
        }else{
            res.status(400)
        }        
    });    
})
router.put('/',(_req, res) => {
    console.log('\x1b[1m\x1b[36m','put: ','\x1b[1m\x1b[33m',' /formSubmit');
    console.log('\x1b[1m\x1b[36m','put:formSubmit:_req','\x1b[1m\x1b[33m',_req.body);
    res.status(200).send('Update the book');
});
// define the login route
router.get('/login', (_req, res) => {
    console.log('\x1b[1m\x1b[36m','get: ','\x1b[1m\x1b[31m',' /formSubmit\/login');
        res.send('id: ' + req.query.id);
        const metadata_user = {...clients_express.get(req.query.id)};
})
router.post('/login',(_req, res) => {
    console.log('\x1b[1m\x1b[36m', 'post: ', '\x1b[1m\x1b[32m', ' /formSubmit\/login');
    selectUser(_req.body).then((value) => {
        if(value){
            const metadata = { 'id': value, 'logged_in': 1, 'ws': 0};
            clients_express.set(value, metadata);
            res.status(200).send(value)
        }else{
            res.status(400)
        }     
    });
     
})
router.put('/login',(_req, res) => {
    console.log('\x1b[1m\x1b[36m', 'put: ', '\x1b[1m\x1b[33m', ' /formSubmit\/login');
    res.status(200).send('Update the book');
});

module.exports = router;