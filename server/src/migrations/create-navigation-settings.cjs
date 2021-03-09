'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('NavigationSettings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      logoUrl: {
        type: Sequelize.STRING,
      },
      teachersLabel: {
        type: Sequelize.STRING,
      },
      pricingLabel: {
        type: Sequelize.STRING,
      },
      contactLabel: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('NavigationSettings');
  },
};
