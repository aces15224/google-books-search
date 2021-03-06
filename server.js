const express = require("express");
const mongoose = require ("mongoose");
const routes= require ("./routes")
const path = require("path");


const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds041188.mlab.com:41188/heroku_6l7sd4v9";
mongoose.connect(MONGODB_URI,{  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.use(routes)

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
