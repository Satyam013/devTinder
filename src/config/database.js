const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kandpalsatyam3:Wy7D1AqQKlfvcBFt@namastenode.ywwfgam.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
