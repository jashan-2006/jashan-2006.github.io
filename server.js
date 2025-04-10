const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// File paths
const dataDir = path.join(__dirname, 'data');
const reviewsFile = path.join(dataDir, 'reviews.json');
const contactsFile = path.join(dataDir, 'contacts.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  console.log('Created data directory');
}

// Initialize files if they don't exist
[reviewsFile, contactsFile].forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '[]', 'utf8');
    console.log(`Created ${path.basename(file)}`);
  }
});

// Helper function for file operations
const handleFileOperation = (filePath, operation) => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const result = operation(data);
    fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf8');
    return { success: true, data: result };
  } catch (err) {
    console.error(`Error processing ${path.basename(filePath)}:`, err);
    return { success: false, error: err };
  }
};

// ===== REVIEW ENDPOINTS =====
app.post('/api/reviews', (req, res) => {
  const { username, message, rating } = req.body;
  
  if (!username || !message) {
    return res.status(400).json({ 
      success: false,
      error: 'Username and message are required' 
    });
  }

  const result = handleFileOperation(reviewsFile, reviews => {
    const newReview = {
      username: username.trim(),
      message: message.trim(),
      rating: Math.min(5, Math.max(0, rating || 0)),
      date: new Date().toISOString()
    };
    reviews.unshift(newReview);
    return reviews;
  });

  if (result.success) {
    res.json({
      success: true,
      message: 'Thank you for your review!',
      review: result.data[0] // Return the newly added review
    });
  } else {
    res.status(500).json({
      success: false,
      error: 'Failed to save review'
    });
  }
});

app.get('/api/reviews', (req, res) => {
  const result = handleFileOperation(reviewsFile, reviews => reviews);
  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json({
      success: false,
      error: 'Failed to load reviews'
    });
  }
});

app.delete('/api/reviews/:id', (req, res) => {
  const id = req.params.id;
  const result = handleFileOperation(reviewsFile, reviews => {
    return reviews.filter(review => review.date !== id);
  });
  
  if (result.success) {
    res.json({
      success: true,
      message: 'Review deleted'
    });
  } else {
    res.status(500).json({
      success: false,
      error: 'Failed to delete review'
    });
  }
});

// ===== CONTACT ENDPOINTS =====
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false,
      error: 'All fields are required' 
    });
  }

  const result = handleFileOperation(contactsFile, contacts => {
    const newContact = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      date: new Date().toISOString(),
      status: 'unread'
    };
    contacts.unshift(newContact);
    return contacts;
  });

  if (result.success) {
    res.json({
      success: true,
      message: 'Thank you for your message!',
      contact: result.data[0]
    });
  } else {
    res.status(500).json({
      success: false,
      error: 'Failed to save contact'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Reviews data: ${reviewsFile}`);
  console.log(`Contacts data: ${contactsFile}`);
});