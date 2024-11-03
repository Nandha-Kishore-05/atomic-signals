module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'testuser@example.com',
        password: 'password123', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {
      email: 'testuser@example.com' 
    }, {});
  },
};
