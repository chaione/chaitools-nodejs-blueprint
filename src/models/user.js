export default (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Book)
      }
    }
  })

  return User
}
