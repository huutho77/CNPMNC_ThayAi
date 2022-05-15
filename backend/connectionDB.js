import mongoose from "mongoose";

const URI =
  "mongodb+srv://thnguyen0707:Huutho!0707@clusteronlinephoneselli.ammbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to Database.");
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

//TODO: Handle close connect to DB timeout with 300seconds
const closeDB = () => {};

export { connectDB, closeDB };
