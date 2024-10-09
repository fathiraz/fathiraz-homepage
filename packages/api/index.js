const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Serve resume.json
app.get('/api/resume', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/resume.json'));
});

// Serve config.json
app.get('/api/config', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/config.json'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
