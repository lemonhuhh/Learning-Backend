// import { example } from "./utils/example.js";
// import { anotherexample, productlist } from "./utils/example.js";

// console.log("server is running...");
// console.log(example());
// console.log(anotherexample());
// console.log(productlist());

import { app } from "./app.js";
import { connectDB } from "./config/database.config.js";
import { env } from "./config/env.config.js";

async function startServer() {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(`Server is running running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:" + error);
  }
}

startServer();
