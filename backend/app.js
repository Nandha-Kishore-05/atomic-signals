const express = require('express');
const cors = require('cors');
const db = require('./models');
const userRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/api', userRoutes);

db.sequelize.sync()
  .then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log('Error connecting to the database:', error));
