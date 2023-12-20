const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Homework extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Task }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Task, { foreignKey: "taskId" });
    }
  }
  Homework.init(
    {
      userId: DataTypes.INTEGER,
      taskId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      checkWork: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Homework",
    }
  );
  return Homework;
};
