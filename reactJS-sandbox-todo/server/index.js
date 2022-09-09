import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//importing routes 
import taskRoutes from './routes/task.js';

const app = express();

//limiting the size of the jsons and urlencoderes=
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

//first parameter here is a prefix thats added after the import of the routes
app.use('/tasks' , taskRoutes);

// In the case of local it'd be closer to:
// const CONNECTION_URL = "http://localhost:username,password,port";
const CONNECTION_URL =
  "mongodb+srv://azureace:azureace123@cluster0.psnyxvw.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

//
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running: ${PORT}`)))
  .catch((error) => console.log(error.message));

// deprecated
// mongoose.set('useFindAndModify', false);

// const http = require('');
