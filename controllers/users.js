'use strict';

const { get_all, get_one, post_one } = require('../models/users-model.js');

module.exports.get_users = (req, res, next) => {
    get_all()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            next(err);
        })
};

module.exports.get_one_user = ({ params: { id } }, res, next) => {
    get_one(id)
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((err) => next(err));
}

module.exports.post_one_user = ({body}, res, next) => {
    post_one(body) 
        .then((new_user) => {
            console.log(new_user);
            res.status(201).json(new_user)
        })
        .catch((err ) => { 
            console.log("getting stuck in catch");
            next(err)
            
});
}