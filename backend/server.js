import app from "./src/app.js";
import connectDB from "./src/config/DbConnection.js";

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
    });
});


