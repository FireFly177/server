import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';
import router from './router/route.js';

// import connection file
import connect from './database/conn.js';

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(cors());
config();

// application port
const port = process.env.PORT || 8081;

app.use(express.json());


// routes
app.use('/api', router)

app.get('/', (req, res) => {
    try {
        res.json("Get request")
    } catch (error) {
        res.json(error)
    }
});

// start server only when valid database connection
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        })
    } catch(error) {
        console.log("Cannot connect to server");
    
    }
}).catch((error) => {
    console.log("Invalid database connection");
})

