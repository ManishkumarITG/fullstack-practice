import routes from "./src/routes/routes.js";
import express from "express";
import {connectDB} from "./src/config/db.js"
connectDB()
const app = express();
app.use(express.json());


const PORT = process.env.PORT || 4000;

app.use("/", routes);

app.listen(PORT , ()=>{
    console.log(`Server running at http://localhost:${PORT}/` );
})