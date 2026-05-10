require("dotenv").config();
const app = require("./src/app");
const port = process.env.PORT || 7000;
const connectDB = require("./src/db/db");

connectDB();
app.listen(port, () => {
  console.log(`Style Deco server running on port number: ${port}`);
});
