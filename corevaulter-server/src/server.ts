import app from "./app"; // 👈 the file you showed above
import { connectToDatabase } from "./utils/database";
import { PORT } from "./utils/config";

const startServer = async () => {
  try {
    await connectToDatabase(); // 👈 connect to MongoDB first
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
