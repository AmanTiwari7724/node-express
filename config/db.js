const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(
    "mongodb+srv://girisha:8762331996@cluster0.51hylkq.mongodb.net/test",
    {
      useNewUrlParser: true,
    }
  );
};

module.exports = connect;
