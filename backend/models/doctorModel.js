import { DataTypes } from "sequelize";
import sequelize from "../config/mysql.js";


const doctorSchema = sequelize.define('Doctor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speciality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fees: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    address: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    slots_booked: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
  }, {
    tableName: 'doctors',
    timestamps: true,
  });

// Sync the model with the database (creates the table if it doesn't exist)
doctorSchema.sync()
  .then(() => {
    console.log('Doctor table synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing Doctor table:', error);
  });

export default doctorSchema;