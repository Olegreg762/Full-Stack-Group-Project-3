const mongoose = require('mongoose');

module.exports = async (modelName, collectionName) => {
  try {
    const Model = mongoose.model(modelName);

    const collectionExists = await mongoose.connection.db.listCollections({ name: collectionName }).toArray();

    if (collectionExists.length) {
      await Model.collection.drop();
    }
  } catch (err) {
    throw err;
  }
};
