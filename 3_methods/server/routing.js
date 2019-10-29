try {
    const express = require('express')
    const app= express()
    const port = 999

    app.get('/', function (req, res) {
      res.send('Get a random book')
    })
    app.get('/addbook', function (req, res) {
      res.send('Add a book')
    })
    app.get('/upbook', function (req, res) {
      res.send('Update the book')
    })

   app.listen(port, () => console.log(`Ok on port ${port}`))
} catch (error) {
    
}
  