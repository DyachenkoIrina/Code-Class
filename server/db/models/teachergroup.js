'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Teacher, Group }) {
      TeacherGroup.belongsTo(Teacher, { foreignKey: 'teacherId' });
      TeacherGroup.belongsTo(Group, { foreignKey: 'groupId' });
    }
  }
  TeacherGroup.init({
    teacherId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeacherGroup',
  });
  return TeacherGroup;
};