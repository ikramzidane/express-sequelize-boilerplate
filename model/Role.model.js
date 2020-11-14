const name = 'Role';
const tableName = 'user_roles';

function define(sequelize, DataTypes, Sequelize) {
  return sequelize.define(name, {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
  {
    tableName
  })
}

function associate(models) {
  models.Role.belongsTo(models.User);
}


module.exports = {
  name,
  define,
  associate
}