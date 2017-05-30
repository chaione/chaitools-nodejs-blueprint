export default (sequelize, DataTypes) => {
  var Book = sequelize.define("Book", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Book.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  })

  return Book
}
