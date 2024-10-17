import { useState,useEffect } from 'react'
import Base_url from './Base_url';
import './App.css'
import axios from "axios"

function App() {
  const [url, setUrl] = useState('');
    const [downloadLink, setDownloadLink] = useState('');
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            if (activeTab.url.includes('youtube.com')) {
                setUrl(activeTab.url);
            }
        });
    }, []);

    const handleDownload = async () => {
        try {
          setLoading(true)
            const response = await axios.get(`${Base_url}/download?url=${encodeURIComponent(url)}`);
            setDownloadLink(`${Base_url}${response.data.filePath}`);
        } catch (error) {
            console.error('Error downloading video:', error);
        } finally{
          setLoading(false)
        }
    };

    return (
        <div>
            <h1>YouTube Downloader</h1>
            {url ? (
                <>
                    <p>Detected URL: {url}</p>
                    <button onClick={handleDownload} disabled={loading}>
                      {loading ? 'Downloading...' : 'Download'}
                    </button>
                    <br></br>
                    {downloadLink && (
                        <div>
                            <a href={downloadLink} download>Click to Download on the pc</a>
                        </div>
                    )}
                </>
            ) : (
                <p>No YouTube URL detected</p>
            )}
        </div>
    );
}

export default App
