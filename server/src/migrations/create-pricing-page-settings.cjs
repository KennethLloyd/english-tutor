'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PricingPageSettings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      backgroundColor: {
        type: Sequelize.STRING,
      },
      titleLabel: {
        type: Sequelize.STRING,
      },
      titleLabelColor: {
        type: Sequelize.STRING,
      },
      headerBackgroundColor: {
        type: Sequelize.STRING,
      },
      headerTextColor: {
        type: Sequelize.STRING,
      },
      detailsBackgroundColor: {
        type: Sequelize.STRING,
      },
      detailsTextColor: {
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
    return queryInterface.dropTable('PricingPageSettings');
  },
};
