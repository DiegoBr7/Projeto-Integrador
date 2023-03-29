module.exports = (sequelize, datatypes) => {
    const Usuario = sequelize.define('Usuario', {
      id: {
        type: datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username:{
        type: datatypes.STRING,
        allowNull: false
      },
      nome: {
        type: datatypes.STRING,
        allowNull: false
      },
      senha: {
        type: datatypes.STRING,
        allowNull: false
      },
      endereco: {
        type: datatypes.STRING,
        allowNull: false
      },
      telefone: {
        type: datatypes.STRING,
        allowNull: false
      },
      email: {
        type: datatypes.STRING,
        allowNull: false
      }
    },
      { tableName: 'usuarios', timestamps: false }
    );
    return Usuario
  }