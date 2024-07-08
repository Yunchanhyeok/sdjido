const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// HTML 페이지 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 영상 파일 제공
app.get('/video', (req, res) => {
  const videoPath = path.join('C:', 'Users', 'User', 'Desktop', '역대급보안폴더', 'nok.mp4');
  res.sendFile(videoPath);
});

// 사진 파일 제공
app.get('/icon', (req, res) => {
  const iconPath = path.join('C:', 'Users', 'User', 'Desktop', '역대급보안폴더', 'KakaoTalk_20240701_102412109.png');
  res.sendFile(iconPath);
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
