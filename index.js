// import {User, Listing, Transaction} from './models.js';
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000

const db = require("./config/db");
const User = require("./models/user");
const Listing = require("./models/listing");
const Transaction = require("./models/transaction");


// start db
db.authenticate()
	.then((result) => {
		console.log("Connection established.");

	})
	.catch((error) => {
		console.log("Unable to connect to db: ", error);
	});

async function sync() {
	await db.sync({ force: true });
}
sync();

const app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async function (req, res) {

	const jane = await User.create({ username: "Jane" });
	console.log("Jane's auto-generated ID:", jane.id);
	res.render('home', { title: 'Home', message: jane })
})

app.get('/login', function (req, res) {
	res.render('login', { title: 'Login' })
})

app.get('/listing', function (req, res) {
	res.render('listing', { title: 'Listing' })
})

app.get('/profile', function (req, res) {
	res.render('profile', { title: 'Profile', message: "Test" })
})

app.get('/pay', function (req, res) {
	res.render('pay', { title: 'payment', message: "Test" })
})

app.get('/succeed', function (req, res) {
	res.render('succeed', { title: 'succeed', message: "Test" })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))