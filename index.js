const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');


const app = express();
const PORT = 6659;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res,next) => {
    res.render('index');
});

app.get('/HAM3', (req,res) => {
    res.render('hamtree');
});

app.post('/verify', (req, res) => {
    const { code } = req.body;
    if (!code) {
        res.send('Please enter a code');
    } else if (code === '280124') {
        res.redirect('/HAM3');
    } else {
        res.send('Incorrect code');
    }
});

app.listen(PORT, () => {
    console.log(`WebSite is running on http://localhost:${PORT}`)
})