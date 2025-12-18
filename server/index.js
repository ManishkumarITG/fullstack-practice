import routes from "./src/routes/routes.js";
import express from "express";
import {connectDB} from "./src/config/db.js"
import cors from "cors"
connectDB()
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use("/", routes);

app.listen(PORT , ()=>{
    console.log(`Server running at http://localhost:${PORT}/` );
})