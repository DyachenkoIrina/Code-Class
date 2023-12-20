const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Group, Homework, Task }) {
      // define association here
      this.belongsTo(Group, { foreignKey: "groupId" });
      this.hasMany(Homework, { foreignKey: "userId" });
      this.belongsToMany(Task, {
        through: "HomeworkTask",
        foreignKey: "userId",
      }); // Внес изменение здесь
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
      role: DataTypes.STRING,
      groupId: DataTypes.INTEGER,
      lastName: DataTypes.STRING,
      profileImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
