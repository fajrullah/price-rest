'use strict'
const express = require('express'), 
		users = express.Router(), 
		cors = require('cors'),
		Comment = require('./models/Comments'),
		Reply = require('./models/Reply'),
		Link = require('./models/Link'),
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
exports.createComment = async ({comment , username}) => { 
    return await Comment.create({comment , username});
};
exports.createReply = async ({comment , username , id_comment}) => { 
    return await Reply.create({comment , username , id_comment});
};
exports.createLinks = async ({links}) => { 
    return await Link.create({links});
};
exports.updateComment = async ({dislikes , likes , id_comment}) => {
    return await Comment.update({dislikes, likes },
                     {returning: true, plain: true, where: {id_comment} })
                    .then(update => update)
                    .catch(error => error)
};