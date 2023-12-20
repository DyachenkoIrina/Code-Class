'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GetTopic extends Model {
 
    static associate({User, Topic}) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Topic, { foreignKey: "topicId" });
    }
  }
  GetTopic.init({
    userId: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GetTopic',
  });
  return GetTopic;
};