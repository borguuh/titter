//The require(‘mongoose’) call above returns a Singleton object.
//It means that the first time you call require(‘mongoose’), it
//is creating an instance of the Mongoose class and returning it.
//On subsequent calls, it will return the same instance that was
//created and returned to you the first time because of how module
//import/export works in ES6.

// const mongoose = require("mongoose");

// class Database {
//   constructor() {
//     this.mongoURI = process.env.MONGO_URI;
//     this.connect();
//   }

//   connect() {
//     mongoose
//       .connect(this.mongoURI, {
//         useNewUrlParser: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//       })
//       .then(() => {
//         // console.log(process.env.MONGO_URI);
//         console.log("database connection successful");
//       })
//       .catch((err) => {
//         // console.log(process.env.MONGO_URI);
//         console.log("database connection error " + err);
//       });
//   }
// }

// module.exports = new Database();
