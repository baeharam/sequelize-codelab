/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photos', {
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    photo_url: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'photos'
  });
};
