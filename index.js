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

// app.post('/profile', (req, res) => {
// 	res.send(req.body)
// 	console.log(req.body)
// })

app.patch('/profile', (req, res) => {
	
	let dataRes = {
		name: req.body.name,
		batch: req.body.batch,
		email: req.body.email
	}

	let data = {
		name: 'Jane',
		batch: '17.2',
		email: 'janeoud@mail.com'
	} 

	let filter = {...dataRes, ...data}
	res.send(filter)
	console.log(filter)
})


app.listen(port, () => {
	console.log('Port sedang berjalan')
})