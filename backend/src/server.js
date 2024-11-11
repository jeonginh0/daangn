const express = require('express')
const dotenv = require('dotenv')
// const connectDB = require('../config/db')

dotenv.config() // 환경 변수 로드

const app = express()

// MongoDB 연결
// connectDB()

// 미들웨어 설정
app.use(express.json());

// 서버 시작
const PORT = process.env.PORT || 5959;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
