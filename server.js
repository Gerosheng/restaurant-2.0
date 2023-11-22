const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTING_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes setup
const indexRoute = require('./routes/index');
const contactRoute = require('./routes/contact');
const menuRoute = require('./routes/menu');
const pictureRoute = require('./routes/picture');
const picture2Route = require('./routes/picture2');
const picture3Route = require('./routes/picture3');
const restaurantsRoute = require('./routes/restaurants');
const adminRoute = require('./routes/admin');

app.use('/', indexRoute);
app.use('/contact', contactRoute);
app.use('/menu', menuRoute);
app.use('/picture', pictureRoute);
app.use('/picture2', picture2Route);
app.use('/picture3', picture3Route);
app.use('/restaurants', restaurantsRoute);
app.use('/admin', adminRoute);


// Define a route for the homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
