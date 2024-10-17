# YouTube Video Downloader Extension

A **YouTube Video Downloader** built as a Chrome extension using **React.js** and a backend server powered by **yt-dlp** to download videos directly from YouTube. This extension fetches the URL of the active YouTube tab and allows you to download the video to your local machine with ease.




## Features
- **Automatically fetches** the active YouTube tab URL.
- Supports downloading the **best available format** via yt-dlp.
- **Simple and intuitive UI** for quick video downloading.
- **Automatically deletes videos** from the server after a set duration to save space.

## Project Setup

### Prerequisites
- **Node.js** (>=14)
- **npm or yarn**
- **React.js**
- **yt-dlp** installed on the backend server

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/yt-extension.git
   cd yt-downloader

2. **Install Frontend Dependencies:**
    
    ```bash
   cd yt-downloader
   npm install

3. **Add Base_url.jsx to Frontend's src directory:**
    ```bash
    const BASE_URL="http://localhost:3001"
    export default BASE_URL

4. **Install Backend Dependencies:**
    ```bash
   cd backend
   npm install


5. **Run Backend:**
    ```bash
    cd backend
    node index.js
The server will run on http://localhost:3001

### Backend server

The backend server handles video downloads using yt-dlp. It serves the videos from a local directory (public/videos) and deletes them automatically after a set duration to manage storage space.

Ensure that you have yt-dlp installed on your backend machine.

## Chrome Extension Setup

1. **Build React App:**
    ```bash
    npm run build 
In frontend directory

2. **Load the Extension in Chrome:**
- Open Chrome and go to chrome://extensions/
- Enable Developer mode (toggle it on in the top right)
- Click on Load unpacked and select the yt-extension folder.

3. **Usign the Extension:**
Once loaded, open a YouTube video in a tab, click on the extension icon, and    download the video!
