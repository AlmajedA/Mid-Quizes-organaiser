const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

const app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))