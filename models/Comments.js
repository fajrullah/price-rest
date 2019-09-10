const Sequelize = require('sequelize')
const db = require('../database/db.js')
const Reply = require('./Reply.js')
const Comment = db.sequelize.define(
  'comment',
  {
    id_comment: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    likes : {
      type: Sequelize.INTEGER
    },
    dislikes : {
      type: Sequelize.INTEGER
    },
    createtime: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
)
module.exports = Comment
Comment.prototype.toJSON =  function () {
  let values = Object.assign({}, this.get());
  delete values.password;
  return values;
}

Comment.sync()
  .then(() => console.log('Comment'))
  .catch(err => console.log('Comment'));

  