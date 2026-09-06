import { app } from "./app.js";
import { connectDB } from "./config/database.config.js";
import { env } from "./config/env.config.js";

async function startServer() {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(`Server is running at port ${env.PORT}`);
    });
  } catch (error) {
    console.log("Error running the server", +error);
  }
}
startServer();
