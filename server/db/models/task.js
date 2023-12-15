const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Homework, Topic }) {
      // define association here
      this.hasMany(Homework, { foreignKey: "taskId" });
      this.belongsToMany(User, { through: "HomeWork", foreignKey: "userId" });
      this.belongsTo(Topic, { foreignKey: "taskId" });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      questions: DataTypes.TEXT,
      answer: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
