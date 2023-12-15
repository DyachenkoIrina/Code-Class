const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task }) {
      // define association here
      this.hasMany(Task, { foreignKey: "topicId" });
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
