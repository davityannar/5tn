const { users } = require('../models5/User.js');
const db = require('../models');


const getUsers = (req, res) => {
	db.User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((e) => {
      res.json({ error: 'No users registered' });
    });
};

module.exports = {
	getUsers
};