const mongoose = require("mongoose");

//Wrap entire mongoose statement in arrow function to export
const connectDb = () => {  
  mongoose.set('strictQuery', true);
  mongoose
    .connect("mongodb://0.0.0.0:27017/productManagerDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true, //if there is a network outage, rights will be retried
    })
    .then(() => console.log("Established a connection to the database"))
    .catch((err) =>
      console.log("Something went wrong when connecting to the database", err)
    );
};

module.exports = connectDb;
