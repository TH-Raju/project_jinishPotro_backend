let mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");
const port = config.PORT || 5000;

// database connection
async function main() {
  try {
    await mongoose.connect(config.db_url).then(() => {
      console.log(`Database connection is successful 🛢`);
    });
    app.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  } catch (error) {
    console.log(`failed to connect database`);
  }
}

main();
