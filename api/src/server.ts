import express from 'express';
import helloRoutes from './routes/testROute';

import {connectDB} from './db/connections';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;



connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

// Optional health check
app.get('/health', (req, res) => {
  const state = mongoose.connection.readyState;
  res.json({
    db: state === 1 ? 'connected' : 'disconnected',
    state,
  });
});

app.use(express.json());
app.use('/api', helloRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
