module.exports = function(sequelize, Sequelize) {
  var Post = sequelize.define("Post", {
    title: {
      type: Sequelize.STRING,
      len: [1, 160],
      allowNull: false
    },
    body: {
      type: Sequelize.STRING,
      len: [1, 255],
      allowNull: false
    },
    rating: {
      type: Sequelize.DECIMAL,
      allowNull: false
    }
  });
  // Post.associate = function(models) {
  //   Post.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Post;
};
