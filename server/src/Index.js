import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});

app.get("/api/employees", (req, res) => {
  res.json([
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      department: "Engineering",
      location: "Bangalore",
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      department: "HR",
      location: "Mumbai",
    },
    {
      id: "3",
      firstName: "Jane-do",
      lastName: "Smith",
      department: "IT",
      location: "Hyderabad",
    },
  ]);
});
