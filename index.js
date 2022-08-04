import express from 'express';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Read .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

const URI =
  'mongodb+srv://bono:E3j8rCNbQ4dLC0jG@cluster0.rbdq7.mongodb.net/?retryWrites=true&w=majority';

// Connected middleware
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use('/posts', posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });
