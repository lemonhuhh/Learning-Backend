import { app } from "../../Backend yeti wear/src/app";
import { connectDB } from "../../Backend yeti wear/src/config/database.config";
import { env } from "../../Backend yeti wear/src/config/env.config";

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
