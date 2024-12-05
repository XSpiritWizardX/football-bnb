'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];
const db = {};

// Initialize sequelize
let sequelize;

if (config.use_env_variable) {
  const databaseUrl = process.env[config.use_env_variable];

  // Check if the database URL is set in the environment
  if (!databaseUrl) {
    throw new Error(`Database URL not found in environment variable ${config.use_env_variable}`);
  }

  sequelize = new Sequelize(databaseUrl, config);  // Use the URL from the environment
} else {
  // If no environment variable is used, use traditional connection details
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Load all models
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Set up associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Add sequelize and Sequelize to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
