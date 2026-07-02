# 🎬 CutX - Twitter/X Video Clipper

CutX is a full-stack web application that allows users to download and clip videos from public X (formerly Twitter) posts. Users can specify optional start and end timestamps to extract a specific segment of a video and download it as an MP4 file.

## ✨ Features

- 📥 Download videos from public X/Twitter posts
- ✂️ Clip videos using custom start and end timestamps
- ⚡ Fast video processing using FFmpeg
- 🎨 Modern and responsive user interface
- 📁 Automatic MP4 download
- 🔄 Cross-platform support (Windows/Linux/macOS)

---

## 🛠️ Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

### Backend
- Go (Golang)
- FFmpeg
- yt-dlp

---

## 📂 Project Structure

```
CutX/
│
├── client/          # Next.js frontend
│
├── server/          # Go backend
│
└── README.md
```

---

## ⚙️ Prerequisites

Before running the project, install:

- Node.js (v18+ recommended)
- Go (v1.22+)
- FFmpeg
- yt-dlp

Verify installation:

```bash
node -v
go version
ffmpeg -version
yt-dlp --version
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/CutX.git
cd CutX
```

---

### 2. Install frontend dependencies

```bash
cd client
npm install
```

---

### 3. Install backend dependencies

```bash
cd ../server
go mod tidy
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd server
go run main.go
```

Backend runs on:

```
http://localhost:9000
```

---

### Start Frontend

Open another terminal.

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## 📖 Usage

1. Open the frontend in your browser.

2. Paste a public X/Twitter post URL containing a video.

Example:

```
https://x.com/username/status/1234567890123456789
```

3. Optionally provide:

- Start Time (HH:MM:SS)
- End Time (HH:MM:SS)

Example:

```
Start: 00:00:10
End:   00:00:30
```

4. Click **Download Clip**.

5. The processed MP4 file will be downloaded automatically.

---

## 📌 API Endpoints

### Health Check

```
GET /
```

Returns server status.

---

### Clip Video

```
POST /clip
```

Request:

```json
{
  "tweetUrl": "https://x.com/username/status/...",
  "start": "00:00:05",
  "end": "00:00:20"
}
```

Response:

```json
{
  "downloadUrl": "http://localhost:9000/download/clipped_xxxxx.mp4"
}
```

---

### Download Video

```
GET /download/:filename
```

Downloads the generated video clip.

---

## 📸 Screenshots

Add screenshots here.

Example:

```
screenshots/
    home.png
    processing.png
    download.png
```

---

## 🔧 Configuration

The backend uses:

| Variable | Default |
|-----------|----------|
| PORT | 9000 |
| BASE_URL | http://localhost:9000 |

Example:

```env
PORT=9000
BASE_URL=http://localhost:9000
```

---

## 📝 Future Improvements

- User authentication
- Download history
- Multiple video formats
- Batch processing
- Docker support
- Cloud deployment
- Progress bar during download
- Video preview before clipping

---

## 📄 License

This project is intended for educational and personal use. Ensure you comply with X (Twitter) Terms of Service and copyright laws when downloading or sharing media.

---

## 👨‍💻 Author

Utkarsh Kumar Jha