import express from 'express'

const app = express()

app.get ('/router', (req, res) => {
  res.send('Router test')
})

app.listen(8080, ()=> console.log('Lintening in port 8080'))