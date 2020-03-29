const mongoose = require('mongoose');

const connectToDb = async dataBaseUrl => {
  await mongoose.connect(
    dataBaseUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

    error => {
      error ? console.log(error) : console.log('Connected to DB!');
    },
  );
};

module.exports = connectToDb;
