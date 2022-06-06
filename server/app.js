import express from "express";
import fileUpLoad from "express-fileupload";
import postsRoutes from "./routes/posts.routes.js";
import {dirname, join} from 'path'
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


//Middleware
app.use(express.json());
app.use(fileUpLoad({
    useTempFiles: true,
    tempFileDir: './upload'
}));

//Routes
app.use(postsRoutes);
console.log(__dirname);

app.use(express.static(join(__dirname, '../client/build')));

export default app;