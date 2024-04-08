const User = require('./model');

const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json(response);
        }) 
        .catch(error => {
            res.json(error);
        }); 
};

const getUserById = (req, res, next) => {
    User.findById(req.params.id)
        .then(response => {
            res.json(response);
        }) 
        .catch(error => {
            res.json(error);
        }); 
};

const addUser = (req, res, next) => {
    const newUser = new User({
        userRole: req.body.userRole,
        name: req.body.name,
        DateOfBirth: req.body.DateOfBirth,
        mobile: req.body.mobile,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    newUser.save()
        .then(response => {
            res.json(response);
        }) 
        .catch(error => {
            res.json(error);
        }); 
};

const updateUser = (req, res, next) => {
    const { userRole, name, DateOfBirth, mobile, email, username, password } = req.body;
    User.updateOne({_id: req.params.id}, {userRole, name, DateOfBirth, mobile, email, username, password})
        .then(response => {
            res.json(response);
        }) 
        .catch(error => {
            res.json(error);
        }); 
};

const deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
        .then(response => {
            res.json(response);
        }) 
        .catch(error => {
            res.json(error);
        }); 
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
