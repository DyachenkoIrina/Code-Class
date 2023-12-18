'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Teacher
    }) {
      // define association here
      this.hasMany(User, { foreignKey: 'groupId' });
      this.belongsToMany(Teacher, { through: 'TeacherGroups', foreignKey: 'groupId'})
    }
  }
  Group.init({
    group: DataTypes.STRING,
    teacher: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};