const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Email = require('./models/email');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' and 'views' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'views')));

// Routes setup
const indexRoute = require('./routes/index');
const contactRoute = require('./routes/contact');
const menuRoute = require('./routes/menu');
const pictureRoute = require('./routes/picture');
const picture2Route = require('./routes/picture2');
const picture3Route = require('./routes/picture3');
const restaurantsRoute = require('./routes/restaurants');
const dashboardRoute = require('./routes/dashboard');

app.use('/', indexRoute);
app.use('/contact', contactRoute);
app.use('/menu', menuRoute);
app.use('/picture', pictureRoute);
app.use('/picture2', picture2Route);
app.use('/picture3', picture3Route);
app.use('/restaurants', restaurantsRoute);
app.use('/dashboard', dashboardRoute);

// Define a route for serving HTML files
app.get('/:page', (req, res) => {
  const requestedPage = req.params.page;
  const filePath = path.join(__dirname, 'views', `${requestedPage}.html`);

  // Check if the requested HTML file exists
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    // If the file doesn't exist, handle it as a 404 error
    res.status(404).send('Not Found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
