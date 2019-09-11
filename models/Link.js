const Sequelize = require('sequelize')
const db = require('../database/db.js')

const Link = db.sequelize.define(
  'link',
  {
    id_link: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    link: {
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
module.exports = Link
Link.prototype.toJSON =  function () {
  let values = Object.assign({}, this.get());
  delete values.password;
  return values;
}

Link.sync()
  .then(() => console.log('Reply'))
  .catch(err => console.log('Comment'));

  