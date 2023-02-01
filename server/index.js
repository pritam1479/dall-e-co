import express from 'express';
import dalleRoute from './routes/dalleRoute.js';
import postRoute from './routes/postRoute.js';
import cors from 'cors';
import connectDB from './config/connectDB.js';

const PORT = process.env.port || 3500;

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRoute);
app.use('/api/v1/post', postRoute);

app.get('/', (req, res) => {
    res.send('Server is Running now');
});

const startServer = () => {
    connectDB()
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}

startServer()