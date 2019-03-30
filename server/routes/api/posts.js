const express = require('express');
const mongodb = require('mongodb');

//get posts

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());

});

// add post

router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();

});


//delete post

router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});


// mongo cluster connection


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://monktrev:UjnIwqzYgbSxxZXg@cluster0-lptwp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("threeapp").collection("posts");
    // perform actions on the collection object
    client.close();

});

// async function to load posts
async function loadPostsCollection() {
    const client = await MongoClient.connect(('mongodb+srv://monktrev:UjnIwqzYgbSxxZXg@cluster0-lptwp.mongodb.net/test?retryWrites=true'), {
        useNewUrlParser: true
    });
    return client("threeapp").collection("posts");
}

module.exports = router;