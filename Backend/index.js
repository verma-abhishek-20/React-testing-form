import express from 'express'
import cors from 'cors';
import user from './Models/user';
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/submit-form', async(req, res) => {
  const { name, email } = req.body;
  console.log('Form data received:', name, email);

  const userDet=await user.create({
    name,
    email
  })
  console.log(userDet)
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});