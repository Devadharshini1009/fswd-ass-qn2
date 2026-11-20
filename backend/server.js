import express from 'express';
import cors from 'cors';
import studentRoutes from './src/routes/studentRoutes.js';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);

app.get('/', (_req, res) => {
  res.json({ message: 'Placement Skill Monitoring API is running' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
