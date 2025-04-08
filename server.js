const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const reviewsFile = path.join(__dirname, 'reviews.json');

// Create the file if it doesn't exist
if (!fs.existsSync(reviewsFile)) {
  fs.writeFileSync(reviewsFile, '[]');
}

app.post('/api/reviews', (req, res) => {
  const { username, message, rating } = req.body;

  if (!username || !message) {
    return res.status(400).json({ message: 'Name and message are required.' });
  }

  const review = {
    username,
    message,
    rating: Math.min(5, Math.max(0, rating || 0)), // clamp rating
    date: new Date().toISOString(),
  };

  try {
    const data = JSON.parse(fs.readFileSync(reviewsFile));
    data.push(review);
    fs.writeFileSync(reviewsFile, JSON.stringify(data, null, 2));
    res.json({ message: 'Thank you for your review!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/reviews', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(reviewsFile));
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Could not load reviews' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
app.delete('/api/reviews/delete/:index', (req, res) => {
  const idx = parseInt(req.params.index);
  try {
    const data = JSON.parse(fs.readFileSync(reviewsFile));
    if (idx < 0 || idx >= data.length) return res.status(400).json({ message: 'Invalid index' });

    data.splice(data.length - 1 - idx, 1); // reverse index
    fs.writeFileSync(reviewsFile, JSON.stringify(data, null, 2));
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

