const name = 'User';
const tableName = 'users';

function define(sequelize, DataTypes, Sequelize) {
  return sequelize.define(name, {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    tableName
  })
}

function associate(models) {
  models.User.hasMany(models.Role);
}


module.exports = {
  name,
  define,
  associate
}