module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.TEXT,
      len: [1, 160],
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      len: [1, 255],
      allowNull: false
    }
  });
  return Post;
};
