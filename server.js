const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Quiz endpoint
app.post('/api/quiz', (req, res) => {
  const submission = {
    ...req.body,
    submittedAt: new Date().toISOString()
  };
  
  // Log to console (replace with email/database in production)
  console.log('📝 New Quiz Submission:', JSON.stringify(submission, null, 2));
  
  // Return success with next steps
  res.json({
    success: true,
    message: 'Thanks for taking the quiz! We\'ll be in touch soon.',
    nextSteps: 'Check your email for your custom action plan.'
  });
});

// Serve the main page for all other routes (SPA-style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 SmartShift running on port ${PORT}`);
});
