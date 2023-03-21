module.exports = (sequelize, datatypes) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: datatypes.STRING,
      allowNull: false
    },
    preco: {
      type: datatypes.FLOAT,
      allowNull: false
    },
    id_categorias: {
      type: datatypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  },
    { tableName: 'produtos', timestamps: false }
  );
  return Produto
}