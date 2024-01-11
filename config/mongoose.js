
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://akash:akash@cluster0.rinpj0h.mongodb.net/pollling?retryWrites=true&w=majority",
    {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection is successfully");
  })
  .catch((e) => {
    console.log("No Connection");
  });
  