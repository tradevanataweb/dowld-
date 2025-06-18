# Downloader API

A production-ready Flask API to download public videos/images using yt-dlp.

## Deployment on Render

1. Push this repo to GitHub.
2. Connect it to Render.com.
3. Build Command: `pip install -r requirements.txt`
4. Start Command: `gunicorn server:app`
