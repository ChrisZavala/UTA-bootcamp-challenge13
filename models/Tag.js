const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
//create our Tag model 

class Tag extends Model {}
//create fields/columns for Tag model. 
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',//lower case rule again 
  }
);
//exports Tag
module.exports = Tag;
