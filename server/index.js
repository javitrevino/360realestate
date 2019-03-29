const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// middle ware

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts')

app.use('/api/posts', posts);

// handle production 
if (process.env.NODE_ENV === 'production') {
    // static folder for production
    app.use(express.static(__dirname + '/public/'));

    // handle SPA routes behavior
    app.get(/.*/, (req, res) => res.sendfile(__dirname + '/public/index.html'));

}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port $ ${port}`));