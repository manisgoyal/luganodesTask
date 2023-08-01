import pkg from 'mongoose'
const { connect, connection } = pkg;

const MONGODB_URI = process.env.MONGODB_URI;

connect(MONGODB_URI);

const db = connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db;
