const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs'); 
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3001;
const downloadDir = path.join(__dirname, 'public', 'videos');
const DELETE_TIMEOUT = 3600000;

app.get('/download', (req, res) => {
    const videoUrl = req.query.url;
    const timestamp = Date.now(); 
    const filename = `video_${timestamp}.mp4`;

    exec(`yt-dlp -f best "${videoUrl}" -o "${path.join(downloadDir, filename)}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: 'Failed to download video' });
        }

        res.json({ filePath: `/downloaded/${filename}` });
        setTimeout(() => {
            const fileToDelete = path.join(downloadDir, filename);
            fs.unlink(fileToDelete, (err) => {
                if (err) {
                    console.error(`Failed to delete file: ${fileToDelete}`, err);
                } else {
                    console.log(`File deleted: ${fileToDelete}`);
                }
            });
        }, DELETE_TIMEOUT)
    });
});

app.get('/downloaded/:filename', (req, res) => {
    const { filename } = req.params;
    const filepath = path.join(downloadDir, filename); 

    if (fs.existsSync(filepath)) {
        res.download(filepath); 
    } else {
        res.status(404).send('File not found.');
    }
});

app.listen(PORT, () => {
    console.log(`${PORT}`);
});
