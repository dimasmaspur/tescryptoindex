'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

   await queryInterface.createTable('users',{
     id:{
       type:Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement:true,
       allowNull:false
     },
     username:{
      type:Sequelize.STRING,
      allowNull:false
     },
     email:{
      type:Sequelize.STRING,
      allowNull:false
     },
     accountNumber:{
      type:Sequelize.STRING,
      allowNull:false
     },
     identityNumber:{
      type:Sequelize.STRING,
      allowNull:false
     },
     password:{
      type:Sequelize.STRING,
      allowNull:false
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
