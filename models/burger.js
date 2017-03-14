const orm = require('../config/orm.js');


const burgers = {
    //function to get all burgers
    selectAll: cb => {
        //send to ORM to process
        //wen function completeted the cb sends data back
        //to controller
        orm.getAllData('burgers', res => {
            cb(res)
        });
    },


    //we recieve our col as an array ['columnName']
    //and values ['value']
    //send it to ORM as (Tablename , ['columnName'],['value'])
    addNewBurger: (cols, vals, cb) => {

        orm.addNew('burgers', cols, vals, (res) => {
            cb(res);
        })
    },




    //we reviev our object with colomn name and changed vals
    //and condition is an ID format 'id=NUM'
    //then we will send it to orm update function where
    //that will return to us changed data
    eatTheBurger: (ObjColVal, condition, cb) => {

        // console.log(ObjColVal, condition)

        orm.updateColumns('burgers', ObjColVal, condition, (res) => {
            //return from ORM is here  
            cb(res);
        })
    },
    sendItback: (condition, cb) => {
        console.log(condition)
        orm.removeFromtable('burgers', condition, (res) => {

            cb(res)
        })
    }

};

//export burgers
module.exports = burgers;