const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const PORT = process.env.PORT || 3000;
//app start

const app = express();

// Middleware
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Router 


const burgerRouter = require("./controllers/burgers_controller.js")
    //let app use our Router
app.use('/', burgerRouter)

//app listen on port or ENV
app.listen(PORT);




//Test Command

// app.get('/', function(req, res) {
//     const obj = {
//         name: "dzmitry"
//     }
//     res.render('index', obj);
// });