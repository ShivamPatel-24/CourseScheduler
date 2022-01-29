const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var classes = [];

// sending the html to the home page
app.get('/', (req, res) => {
    res.render("list", {listItems: classes});
})

// fetching the input entered by the user on the main page
app.post('/', (req, res) => {
    let item = req.body.newItem;

        classes.push(item);
        res.redirect("/");
})

app.listen(3000);