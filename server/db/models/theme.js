const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task }) {
      // define association here
      this.hasMany(Task, { foreignKey: "taskId" });
    }
  }
  Theme.init(
    {
      title: DataTypes.STRING,
      taskId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
