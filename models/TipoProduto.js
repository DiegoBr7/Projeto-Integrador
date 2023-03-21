module.exports = (sequelize, datatypes) => {
  const TipoProduto = sequelize.define('TipoProduto', {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: datatypes.STRING,
      allowNull: false
    }
  },
    { tableName: 'tiposProdutos', timestamps: false }
  );
  return TipoProduto
}