const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
if (process.env.NODE_ENV === 'production') app.use(express.static('client/build'))

require(path.join(__dirname, './routes/api.js'))(app)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'))
})

app.listen(PORT, () => {
  console.log(`==> API server now on port ${PORT} <==`)
})
