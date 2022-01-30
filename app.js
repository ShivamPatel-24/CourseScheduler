const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var classes = [];
allPosts = [];
// allFilters = [];

const post = {
    title: "CPSC 2120 with Dr. Dean",
    content: "Recommendation = highTolaranceOfFailure && (Learning > Grades) ? Definetely : Good luck!"
}

allPosts.push(post);


// sending the html to the home page
app.get('/', (req, res) => {
    res.render("list", {listItems: classes});
})

// fetching the input entered by the user on the main page
app.post('/', (req, res) => {
    let item = req.body.newItem;

    classes.push(item);
    res.redirect("/");

    if (req.body.gButton === "true") console.log("clicked!");

})

app.get('/schedules', (req, res) => {
    res.render("schedules");
})

app.get('/posts', (req, res) => {
    res.render("posts", {Posts: allPosts });
});

app.get('/compose', (req, res) => {
    res.render("review");
})

app.post("/compose", (req, res) => {
    const post = {
      title: req.body.postTitle,
      content: req.body.postBody
    }
  
    allPosts.push(post);
    res.redirect("/posts");
  
  })



app.listen(3000);