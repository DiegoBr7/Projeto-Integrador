module.exports = (sequelize, datatypes) => {
  const Categoria = sequelize.define('Categoria', {
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
    { tableName: 'categorias', timestamps: false }
  );
  return Categoria
}