import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(cors());
config();

// application port
const port = process.env.PORT || 8081;


app.use(express.json());

// routes
app.get('/', (req, res) => {
    try {
        res.json("Get request")
    } catch (error) {
        res.json(error)
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})