import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import Users from "../models/userSchema.js"
import questions, {answers} from '../database/data.js'


// get all questions
export async function getQuestion(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({error})
    }
}

// insert all questions
export async function insertQuestion(req, res) {
    try {
        await Questions.insertMany( { questions, answers});
        res.json('Data inserted successfully');
    } catch (error) {
        res.json({error});
    }
}

// delete all questions
export async function dropQuestion(req, res) {
    try {
        await Questions.deleteMany();
        res.json('Data deleted successfully');
    } catch (error) {
        res.json({error});
    }
}

// get all results
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({error})
    }
}
// post all results
export async function storeResult(req, res) {
    try {
        const {username, result, attemps, points, achived} = req.body;
        if (!username && !result) {
            throw new Error('Data not provided');
        }
        await Results.create({username, result, attemps, points, achived});
        res.json('Result stored successfully');
    } catch (error) {
        res.json({error})
    }
}

// delete all results
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json('Result deleted successfully');
    } catch (error) {
        res.json({error})
    }
}

// get all users
export async function getUser(req, res) {
    try {
        const u = await Users.find();
        res.json(u);
    } catch (error) {
        res.json({error})
    }
}

// post all users
export async function storeUser(req, res) {
    try {
        const {username, password} = req.body;
        if (!username && !password) {
            throw new Error('Data not provided');
        }
        await Users.create({username, password});
        res.json('User stored successfully');
    } catch (error) {
        res.json({error})
    }
}

// delete all users
export async function dropUser(req, res) {
    try {
        await Users.deleteMany();
        res.json('User deleted successfully');
    } catch (error) {
        res.json({error})
    }
}