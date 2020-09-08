const express = require('express')

const app = express()

const port = 8080


app.get('/home', (req, res) => {
	res.send('Welcome to my first backend!')
})

app.listen(port, () => {
	console.log('Port sedang berjalan')
})