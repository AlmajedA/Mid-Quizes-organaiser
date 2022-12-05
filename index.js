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
	const jane = await User.create({ username: "janeDo", full_name: "Jane Doe", phone_number: "02065065160", address: "Seoul, Korea", wallet_address: "0xba87D84a63A38ece49668b148405e09d8aa3FD8d" });
	
	const listing1 = await Listing.create({
		title: 
			"TEST PRODUCT 1",
		description: "THIS IS A TEST PRODUCT MADE FOR TESTING OUR TESTS. TEST ALL THE TESTS",
		author_id: 1,
		price: 2500,
		status: "FOR SALE",
		deposit: 25
	});
	const listing2 = await Listing.create({
		title: 
			"TEST PRODUCT 2",
		description: "THIS IS A TEST PRODUCT MADE FOR TESTING OUR TESTS. TEST ALL THE TESTS",
		author_id: 1,
		price: 5400,
		status: "FOR SALE",
		deposit: 26
	});
	

}
sync();

const app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async function (req, res) {
	// console.log(req);
	const listings = await Listing.findAll();
	console.log(listings);
	res.render('home', { title: 'Home', context: listings })
})

app.get('/login', function (req, res) {
	res.render('login', { title: 'Login' })
})

app.get('/listing', async function (req, res) {
	const listings = await Listing.findAll();
	console.log(listings);
	res.render('listing', { title: 'Listing', context: listings })
})

app.get('/listing/:id', async function (req, res) {
	let listing_id = req.params.id;
	const listing = await Listing.findAll({
		where: {
		  id: listing_id
		}
	  });
	console.log(listing);
	res.render('listing_detail', { title: 'Listing', context: listing[0] })
})

app.get('/profile', async function (req, res) {
	const users = await User.findAll();
	console.log(users);
	res.render('profile', { title: 'Profile', context: users[0] })
})

app.get('/pay', function (req, res) {
	res.render('pay', { title: 'payment', message: "Test" })
})

app.get('/succeed', function (req, res) {
	res.render('succeed', { title: 'succeed', message: "Test" })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))