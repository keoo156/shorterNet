const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", () => {
  console.log("error");
});
db.once("open", () => {
  console.log("success");
});
module.exports = db;
