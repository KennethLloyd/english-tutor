'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ContactPageSettings', {
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
      contactCardTitle: {
        type: Sequelize.STRING,
      },
      contactCardTitleColor: {
        type: Sequelize.STRING,
      },
      contactCardBackgroundColor: {
        type: Sequelize.STRING,
      },
      footerLabel: {
        type: Sequelize.STRING,
      },
      footerBackgroundColor: {
        type: Sequelize.STRING,
      },
      footerTextColor: {
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
    return queryInterface.dropTable('ContactPageSettings');
  },
};
