import mongoose from "mongoose";

const dbConnect = async() => {
  if (mongoose.connections[0].readyState) {
    return;
  } else {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(console.log("MongoDB connected"))
      .catch((err) => console.log(err));
  }
};

export default dbConnect;
