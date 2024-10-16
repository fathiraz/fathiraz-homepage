import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// enable CORS for all routes
app.use(cors());

// serve root 
app.get('/', (_req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

// serve resume.json
app.get('/api/resume', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/resume.json'));
});

// serve config.json
app.get('/api/config', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/config.json'));
});

// running only not in vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// export the Express API
export default app;
