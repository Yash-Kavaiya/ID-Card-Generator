const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (Optional - for storing visitor data)
// mongoose.connect('mongodb://localhost/id-card-generator', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Routes
app.post('/api/generate-card', upload.single('profileImage'), (req, res) => {
  const { orgName, visitorName, phone, dob, address, validUpto } = req.body;
  const profileImage = req.file ? req.file.path : null;

  // Optionally save to database here

  res.json({ success: true, message: 'ID Card Generated', profileImage, data: { orgName, visitorName, phone, dob, address, validUpto } });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
