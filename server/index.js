import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import multer from "multer";
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from "path"
import { fileURLToPath } from 'url';
import postRoutes from './routes/posts.js'
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js"
import User from "./models/User.js";
import Post from './models/Post.js';
import {users,posts} from "./data/index.js";

import { verifyToken } from './middleware/auth.js';

import {createPost} from "./controllers/posts.js"
import {register} from './controllers/auth.js'

// CONGIGURATION
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

// defining the Express app
const app = express();
app.use(express.json());
// adding Helmet to enhance your Rest API's security

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

//using bodyParser to parse JSON bodies into JS objects

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

//enabling CORS for all requests

app.use(cors(
    // {
    //     origin:[`http//localhost:${process.env.PORT}`],
    //     methods:["GET", "POST", "PATCH"],
    // }
));

app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

//adding morgan to log HTTP requests

app.use(morgan('common'))

// FILE STORAGE
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage});

// default route
app.get('/', (req, res) => {
    res.send('Welcome to the default API endpoint!');
});


//Routes with files
 app.post("/auth/register", upload.single("picture"), register)
 app.post("/posts",verifyToken, upload.single("picture"), createPost)

 //Routes 
 app.use('/auth', authRoutes)
 app.use("/users", userRoutes)
 app.use("/posts", postRoutes);

// Mongoose setup

const PORT = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT,() => console.log(`Server Port: ${PORT}`));

    // ADD DATA ONE TIME ONLY
    // User.insertMany(users);
    // Post.insertMany(posts);
}).catch((error) => console.log(`${error} did not connect`));


