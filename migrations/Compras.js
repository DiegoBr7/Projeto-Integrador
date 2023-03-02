
// //


// const Compras = sequelize.define('Compras', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   id_usuario: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     references: {
//       model: Usuarios,
//       key: 'id'
//     }
//   },
//   id_produto: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     references: {
//       model: Produtos,
//       key: 'id'
//     }
//   },
//   quantidade: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   data_compra: {
//     type: Sequelize.DATE
//   }
// });

// module.exports= Compras;