import 'dotenv/config';
import express, { json } from 'express';
const app = express();
const PORT = process.env.PORT || 5000;
// Import the db.js file to connect to MongoDB
import db from './db.js';

app.use(json());

// Import the stake routes
import stakeRoutes from './routes/stake.js';
app.use('/api/stake', stakeRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});