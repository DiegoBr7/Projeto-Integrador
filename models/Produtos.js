


module.exports = (sequelize, datatypes) => {
  const Produtos = sequelize.define('Produtos', {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    modelo: {
      type: datatypes.STRING,
      allowNull: false
    },
    fabricante: {
      type: datatypes.DATE,
      allowNull: false
    },
    cor:{
      type: datatypes.STRING,
      allowNull: false
    }
  },
    { tableName: 'Produtos', timestamps: false }
  );
  return Produtos
}

