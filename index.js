const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

const app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
	res.render('home', { title: 'Home', message: 'Under Construction' })
})

app.get('/login', function (req, res) {
	res.render('login', { title: 'Login'})
})

app.get('/listing', function (req, res) {
	res.render('listing', { title: 'Listing'})
})

app.get('/profile', function (req, res) {
	res.render('profile', { title: 'Profile'})
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))