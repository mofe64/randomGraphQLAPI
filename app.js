const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

mongoose.connect("mongodb://localhost:27017/graphqltest");
mongoose.connection.once("open", () => {
  console.log("connected to db");
});

const app = express();
app.use(
  "/route",
  graphqlHTTP({
    schema,
  })
);

app.listen(4000, () => {
  console.log("running on port 4000");
});
