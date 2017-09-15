'use strict';

const { get_all, get_one, post_one, put_one, remove_one } = require('../models/computer-model.js');

module.exports.get_computers = (req, res, next) => {
  get_all()
    .then((computers) => {
      res.status(200).json(computers);
    })
    .catch((err) => {
      next(err);
    })
};

module.exports.get_one_computer = ({ params: { id } }, res, next) => {
    get_one(id)
        .then((computer) => {
            res.status(200).json(computer)
        })
        .catch((err) => next(err));
}

module.exports.post_one_computer = ({body}, res, next) => {
  post_one(body) 
    .then((new_computer) => {
        res.status(201).json(new_computer)
    })
    .catch((err ) => { 
        next(err)
    });
};

module.exports.put_single_computer = (req, res, next) => {
  put_one(req.params.id, req.body)
  .then((updated_computer) => {
    res.status(200).json(updated_computer);
  })
  .catch((err) => {
    next(err);
  })
};

module.exports.delete_single_computer = ({ params: { id } }, res, next) => {
  remove_one(id)
      .then((computer) => {
          res.status(200).json(computer);
      })
      .catch((err) => next(err));
};