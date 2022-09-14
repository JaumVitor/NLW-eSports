import express from 'express'

const app = express()

app.get ('/router', (req, res) => {
  return res.status(200).json({
    name: "test",
    age: 12
  })
})

app.listen(8080, () => console.log('Lintening in port 8080'))