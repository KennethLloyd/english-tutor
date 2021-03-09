'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HeroSettings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      backgroundImageUrl: {
        type: Sequelize.STRING,
      },
      backgroundOpacity: {
        type: Sequelize.FLOAT,
      },
      titleText: {
        type: Sequelize.STRING,
      },
      titleTextColor: {
        type: Sequelize.STRING,
      },
      subtitleText: {
        type: Sequelize.TEXT,
      },
      subtitleTextColor: {
        type: Sequelize.STRING,
      },
      actionButtonText: {
        type: Sequelize.STRING,
      },
      actionButtonTextColor: {
        type: Sequelize.STRING,
      },
      actionButtonColor: {
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
    return queryInterface.dropTable('HeroSettings');
  },
};
