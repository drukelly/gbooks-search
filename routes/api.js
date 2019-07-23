const Books = require('../models/sqldb.js')

module.exports = app => {
  app.get('/api/books', (_req, res) => {
    Books.findAll().then(results => {
      console.log(results)
      res.json(results)
    })
  })
}
