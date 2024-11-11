const express = require('express')
const app = express()
const PORT = 5959

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from the backend!" })
})

app.listen(PORT, () => {
  console.log(`서버 시작. http://localhost:${PORT}`)
})
