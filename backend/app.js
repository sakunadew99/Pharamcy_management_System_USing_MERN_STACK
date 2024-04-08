const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());  

app.use(express.urlencoded(
    {extended: true}
));

app.use(express.json()); 

app.get('/users', (req, res) => {    
    controller.getUsers(req,res,next).then((result) => {
        resObj = result;
        res.json(resObj);
    });
});

app.get('/users/:id', (req, res) => {
    var resObj =[];
    controller.getUserById(req,res).then((result) => {
        resObj = result;
        res.json(resObj);
    });
}
);

app.post('/addusers', (req, res) => {
    controller.addUser(req.body).then((result) => {
        resObj = result;
        res.json(resObj);
    });
});

app.put('/updateusers', (req, res) => {
    controller.updateUser(req.body).then((result) => {
        resObj = result;
        res.json(resObj);
    });
});

app.delete('/deleteusers', (req, res) => {
    controller.deleteUser(req.body).then((result) => {
        resObj = result;
        res.json(resObj);
    });
});

module.exports = app;