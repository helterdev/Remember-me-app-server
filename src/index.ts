import app from './app';
import { connectDB } from './db/db';

const port = process.env.PORT;

connectDB();
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
