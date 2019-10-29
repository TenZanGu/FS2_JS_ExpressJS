try {
  const express = require('express')
  const appServer = express()
  const bodyParser= require('body-parser')
  const port = 80
  appServer.use(bodyParser.urlencoded({ extended: false}))
  appServer.use(bodyParser.json())
  appServer.get('/', express.static('../client/index.html'))
  appServer.post('/authorizeUser', (req,res)=>{
      let {user}= req.body
      if(user == "1"){
          res.json({
              result: 'admin',
              message: 'Hello Admin'
          })
      }
      else {
          res.json({
              result: 'user',
              message: 'Hello User'
          })
      }
  })
  appServer.listen(port, () => console.log(`Ok on port ${port}`))
  appServer.use(express.static('../client'))
  appServer.use(function (req, res, next) {
      res.status(404).send("File Not Found")
     })
} catch (error) {
    
}
