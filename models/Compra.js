module.exports = (sequelize, datatypes) => {
    const Compra = sequelize.define('Compra', {
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
      id_usuario: {
        type: datatypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      id_produto: {
        type: datatypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      quantidade: {
        type: datatypes.INTEGER,
        allowNull: false
      },
      data: {
        type: datatypes.DATE,
        allowNull: false
      }

    },
      { tableName: 'compras', timestamps: false }
    );
    return Compra
}