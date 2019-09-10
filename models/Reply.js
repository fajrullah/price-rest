const Sequelize = require('sequelize')
const db = require('../database/db.js')

const Replycomment = db.sequelize.define(
  'replycomment',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_comment: {
      type: Sequelize.INTEGER,
      references: 'comment', // <<< Note, its table's name, not object name
      referencesKey: 'id' // <<< Note, its a column name
    },
    comment: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    createtime: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false,
  },
)
module.exports = Replycomment
Replycomment.prototype.toJSON =  function () {
  let values = Object.assign({}, this.get());
  delete values.password;
  return values;
}

Replycomment.sync()
  .then(() => console.log('Reply'))
  .catch(err => console.log('Comment'));

  