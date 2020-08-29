const express = require("express");
const mongoose = require("mongoose")
const {config} = require("dotenv")

config({
    path: __dirname + "/.env"
})
const router = express.Router()

const DB_USERNAME = "zetoxtz"
const DB_PASSWORD = "PeOjhEZRLHX8mSxc"
const DB_NAME = "test"

let db_url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.mhs0z.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to mongodb")
});

const Schema = mongoose.Schema;
const ShopSchema = new Schema({
    name: String,
    owner: String,
    location: String,
    contact_info: String,

    // items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
    items: [String]
})

const ItemSchema = new Schema({
    name: String,
    price: Number,
    price_for: String,
    type: String,
    stock: Number,
    image: String,

    shop: {type: Schema.Types.ObjectId, ref: 'Shop'}
})

const Shop = mongoose.model('Shop', ShopSchema)
const Item = mongoose.model('Item', ItemSchema)

router.get("/shops", async (req, res) => {
    Shop.find((err, data) => {
        res.status(201).send(data)
    })
})

// Delete this route later
router.post("/shop", (req, res) => {
    const shop = new Shop({
        name: req.body.name,
        owner: req.body.owner,
        location: req.body.location,
        contact_info: req.body.contact_info
    })
    shop.save().then(() => console.log(`Shop created ${shop.name}`))
    res.status(201).send(shop);
})


router.post("/item", async(req, res) => {
    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        price_for: req.body.price_for,
        type: req.body.type,
        stock: req.body.stock,
        image: req.body.image,
        shop: req.body.shop
    })
    item.save().then(() => console.log(`Added item ${item.name}`))
    res.status(201).send(item)
})

router.get("items", async(req, res) => {
    Item.find((err, data) => {
        res.status(201).send(data)
    })
})

router.get("/item/:id" , async(req, res) => {
    Item.findById(req.params.id, (err, data) => {
        res.send(data)
    })
})
router.get("/", (req, res) => {
    // console.log(db_url)
    console.log("hi")
    res.status(201).send()
})

router.post('/', async (req, res) => {
    
    const kitty = new Cat({ name: req.body.name });
    kitty.save().then(() => console.log('meow'));
    res.status(201).send(kitty);
});

module.exports = router;