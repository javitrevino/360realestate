const express = require('express');

//get posts

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());

});


// mongo cluster connection


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://weblyuser:xNgnSSJACAixa3DC@cluster0-lptwp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("threeapp").collection("posts");
    // perform actions on the collection object
    client.close();


});

// async function to load posts
async function loadPostsCollection() {
    const client = await MongoClient.connect(('mongodb+srv://weblyuser:xNgnSSJACAixa3DC@cluster0-lptwp.mongodb.net/test?retryWrites=true'), {
        useNewUrlParser: true
    });
    return client.db("threeapp").collection("posts");
}

module.exports = router;