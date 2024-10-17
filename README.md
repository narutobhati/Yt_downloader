YouTube Video Downloader Extension

A YouTube Video Downloader built as a Chrome extension using React.js and a backend server powered by yt-dlp to download videos directly from YouTube. This extension fetches the URL of the active YouTube tab and allows you to download the video to your local machine with ease.

Features

    Automatically fetches the active YouTube tab URL.
    Supports downloading the best available format via yt-dlp.
    Simple and intuitive UI for quick video downloading.
    Automatically deletes videos from the server after a set duration to save space.

Project Setup

Prerequisites

    Node.js (>=14)
    npm or yarn
    React.js
    yt-dlp installed on the backend server

Installation

    Clone the Repository: git clone https://github.com/narutobhati/Yt_downloader.git

  

Install Frontend Dependencies: cd frontend

Install the necessary npm packages for the frontend:

bash


npm install

Install Backend Dependencies:

Go to the backend directory and install dependencies:

bash

cd backend
npm install

Run Backend Server:

Start the backend server which handles video downloads:

bash

    cd backend
    node server.js

    The server will run on http://localhost:3001.

Backend Server

The backend server handles video downloads using yt-dlp. It serves the videos from a local directory (public/videos) and deletes them automatically after a set duration to manage storage space.

Ensure that you have yt-dlp installed on your backend machine.
Chrome Extension Setup

    Build the React App:

    Run the following command to build the extension:

    bash

    npm run build

    Load the Extension in Chrome:
        Open Chrome and go to chrome://extensions/
        Enable Developer mode (toggle it on in the top right)
        Click on Load unpacked and select the yt-extension folder.

    Using the Extension:

    Once loaded, open a YouTube video in a tab, click on the extension icon, and download the video!

Screenshots
1. Extension UI

Figure 1: Popup showing download options for the active YouTube video.
2. Video Downloading

Figure 2: Video downloading to the local server.
3. Completed Download

Figure 3: Successful download of the video.
Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
License

This project is licensed under the MIT License - see the LICENSE file for details.
