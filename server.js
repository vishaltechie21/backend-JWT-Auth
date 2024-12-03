const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Define a route for the root path "/"
app.get('/', (req, res) => {
  res.send('Hello, welcome to the RBAC API!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
