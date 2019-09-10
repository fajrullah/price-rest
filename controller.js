'use strict'
const express = require('express'), 
		users = express.Router(), 
		cors = require('cors'),
		Comment = require('./models/Comments'),
		Reply = require('./models/Reply'),
 		Op = require('./database/db').Sequelize.Op;
users.use(cors())
Comment.hasMany(Reply, {
  foreignKey: {
    name: 'id_comment',
    allowNull: false
  },
  targetKey: 'id_comment'
})
exports.getAllComment = async () => {
  return await Comment.findAll({
	    include: [{
	        model: Reply,
	    }]
    });
};
exports.getAllReply = async () => {
  return await Reply.findAll();
};