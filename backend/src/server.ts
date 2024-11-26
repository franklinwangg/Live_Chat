import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/userRoutes";
import friendRoutes from "./routes/friendRoutes";


const PORT:number = 5000;

const app = express();

app.use(express.json());
app.use(cors());


app.use("/userRoutes", userRoutes);
app.use("/friendRoutes", friendRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
