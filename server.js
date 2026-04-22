const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Serve static files from public directory
const staticPath = path.join(__dirname, 'public');
console.log('Serving static files from:', staticPath);

app.use(express.static(staticPath));

// Quiz endpoint
app.post('/api/quiz', (req, res) => {
  const submission = {
    ...req.body,
    submittedAt: new Date().toISOString()
  };
  
  console.log('📝 New Quiz Submission:', JSON.stringify(submission, null, 2));
  
  res.json({
    success: true,
    message: 'Thanks for taking the quiz! We\'ll be in touch soon.',
    nextSteps: 'Check your email for your custom action plan.'
  });
});

// Explicit root route
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Serve index.html for any other route (SPA-style)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 SmartShift running on port ${PORT}`);
});
