'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class depoimentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  depoimentos.init({
    usuarioId: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    mensagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'depoimentos',
  });
  return depoimentos;
};