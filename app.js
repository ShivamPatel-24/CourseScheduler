const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["eat", "netflix", "sleep"];
var workItems = [];

// sending the html to the home page
app.get('/', (req, res) => {

    let day = date.getDate();
    res.render("list", {listTitle: day, listItems: items});
})

// fetching the input entered by the user on the main page
app.post('/', (req, res) => {
    let item = req.body.newItem;

    if (req.body.list === 'Work List'){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
})

app.get('/work', (req, res) => {
    res.render("list", {listTitle: "Work List", listItems: workItems});
})

app.post('/work', (req, res) => {
    let workItem = req.body.newItem;
    workItems.push(workItem);
    res.redirect("/work");
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.listen(3000);