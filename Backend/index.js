// server.js
import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ForRough");

app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  console.log('Form data received:', name, email);

  res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});