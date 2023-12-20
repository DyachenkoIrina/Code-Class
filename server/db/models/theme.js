const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task, User, GetTopic }) {
      // define association here
      this.hasMany(Task, { foreignKey: "topicId" });
      this.hasMany(GetTopic, { foreignKey: "topicId" });
      this.belongsToMany(User, {
        through: "GetTopic",
        foreignKey: "topicId",
      });
    }
    
  }
  Topic.init(
    {
      title: DataTypes.STRING,
      img: DataTypes.STRING,
      description: DataTypes.STRING,
      complexity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};
