import express from 'express';
import helloRoutes from './routes/testROute';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', helloRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
