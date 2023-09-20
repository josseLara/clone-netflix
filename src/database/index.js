import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "" // URL mongoDB
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
