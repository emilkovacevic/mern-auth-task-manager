import  dotenv from 'dotenv';
dotenv.config();
require('express-async-errors')
import path from 'path';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import authrouter from './routes/auth';
import usersrouter from './routes/users'; './routes/users';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { logger, logEvents } from './middleware/logger';
import { connectDB } from './config/dbConn';
import corsOptions from './config/corsOptions';

const port = process.env.PORT || 3000;
const app: Express = express();

connectDB();

app.use(express.json())

app.use(logger)

app.use(cors(corsOptions))

app.use(cookieParser());

// Routes
app.use('/auth', authrouter);

app.use('/', usersrouter);

// server static files
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/views/'  });
})
// // inject public folder - style.css
app.use('/', express.static(path.join(__dirname, 'public')))


// // on not found serve views/404.html
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 | Not found' })
    } else {
        res.type('txt').send('404 | Not found')
    }
})

mongoose.connection.once('open', () => {
    app.listen(port, () => console.log(`Server running on port ${port}`))
})

mongoose.connection.on('error', (err) => {
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.name}\t${err.message}`, 'mongoErrLog.log')
    console.log(err)
})

