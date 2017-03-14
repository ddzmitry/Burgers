const express = require("express");

const router = express.Router();


// Import the model burger.js
// to use its database functions that lead to ORM.
const burger = require("../models/burger.js");

router.get('/', (req, res) => {
    //get all burgers
    //we send request to module module send it to ORM
    //ORM returns via callback to module, module returns
    //data back to controller and then getting rendered in handlebars

    burger.selectAll(data => {

        let tabaleData = { burgers: data };

        res.render('index', tabaleData);

    });

});

router.put('/:id', (req, res) => {
    //Here we declare our condition based of id
    //to send it to the table
    //we get our id from URL
    //and eatten value from req.body.eatten
    //check index.handlebars for explanation
    let condition = "id = " + req.params.id;
    console.log(req.body.eatten, condition);
    // devoured
    //we create an object that has an UPDATE on column name 
    // where id is req.params.id => next to midule to define table
    // burger.eatTheBurger({ devoured: req.body.eatten }, condition, () => { res.redirect("/"); });

    //set Timeout to Play audio
    setTimeout(() => { burger.eatTheBurger({ devoured: req.body.eatten }, condition, () => { res.redirect("/"); }); }, 2000)

});

router.post('/', (req, res) => {

    // console.log(req)
    //setTimeout to let audio play on derverSide
    setTimeout(() => { burger.addNewBurger(['burger_name'], [req.body.name], () => { res.redirect("/") }); }, 2000)




})

router.delete('/:id', (req, res) => {
    let condition = "id = " + req.params.id;
    console.log(condition)
    setTimeout(() => { burger.sendItback(req.params.id, () => { res.redirect("/"); }); }, 4000)





    //     burger.sendItback(req.params.id, () => {
    // res.redirect("/");
    //     });

});

module.exports = router;