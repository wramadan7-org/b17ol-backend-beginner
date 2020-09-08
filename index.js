const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const port = 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/home', (req, res) => {
	res.send('Welcome to my first backend!')
})

app.post('/data', (req, res) => {
	console.log('Post dari body : ', req.body)
})


app.listen(port, () => {
	console.log('Port sedang berjalan')
})