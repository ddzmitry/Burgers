//Connect to SQL burger DB
const connection = require("../config/connection.js");

// Takint these functions from Class Example;
// Helper function for SQL syntax.
function printQuestionMarks(num) {

    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// NB! Let say we pass 3 values to the mySQL query,
// so to be able to write it we need 3 X '?'
// Function loops through variables and creates an
// array of "?" ["?", "?", "?"] and then makes it as a string
// ["?", "?", "?"].toString() => "?,?,?";

// Helper function for SQL syntax.
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}
// NB! Pass OBJ let say {burger_name: 'PBandJ burger'}
// looping over key inside of the object and pushing key
// and value in this format["burger_name = 'PBandJ burger'"]
// and then take it to string and now SQL can read it like
// burger_name = 'PBandJ burger' and as usually it comes like
// WHERE id = ?(number)

const orm = {
    getAllData: (table, cb) => {
        //we got table name from module requested from controller
        //we run query , get data, return it back to module
        // module returns mack to controller
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            //!NB
            cb(result)

        });
    },
    addNew: (table, cols, vals, cb) => {


        // let say we have from module incomming
        // burgers [ 'burger_name' ] [ 'Pb&J Burger' ]
        // the queryConstrucrtr will do
        //         INSERT INTO burgers
        //         (  [ 'burger_name' ].toString() ) 
        //         VALUES
        //         (  ['?'].toString())
        //                     OR
        //  INSERT INTO burgers ('burger_name') VALUES (?)
        //and we pass vals on line 85 to send to mySQL

        // console.log(table, cols, vals);
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        //cols in array to string
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        //here where we make our vals as questions marks
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            //!NB BACK TO MODULE
            cb(result)

        });

    },
    // 'burgers', ObjColVal, condition, 
    updateColumns: (table, ObjColVals, condition, cb) => {
        //test to check if everything is correct
        // console.log(table, ObjColVals, condition)
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(ObjColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString)

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            //!NB BACK TO MODULE
            cb(result)

        });

    },

    removeFromtable: (table, condition, cb) => {
        // console.log(table, condition)
        let queryString = "DELETE FROM ?? WHERE id=?;";
        console.log(queryString)
        connection.query(queryString, [table, condition], (err, result) => {
            if (err) {
                throw err;
            }
            //!NB BACK TO MODULE
            cb(result)

        });

    }

}

module.exports = orm;