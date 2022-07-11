const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'rhemarx'

});

app.use(cors());

app.use(express.json());


app.post('/createProfile', (req,res)=>{

    var userId = req.body.userId;
    var userKey = req.body.userKey;
    var name = req.body.name;
    var sex = req.body.sex;
    var age = req.body.age;
    var address = req.body.address;
    var facialMarks = req.body.facialMarks;
    var nationality = req.body.nationality;
    var skinColor = req.body.skinColor;
    var height = req.body.height;

    var sql = "INSERT INTO profiles (access_id, access_key, name, sex, age, address, facial_marks, nationality, skin_color, height) VALUES (?,?,?,?,?,?,?,?,?,?)";

    var data = [userId , userKey, name, sex, age, address, facialMarks, nationality, skinColor, height];


    db.query(sql, [...data], (err, result)=>{
        if(err){
            console.error(err.message);
        }else{
            res.send({message : "Congratulations! Your Profile Was Successfully Created."});
        }
    });
    
    //res.send('Welcome to my new page');

});

app.post('/viewProfile', (req,res)=>{

    var id = req.body.userAccessId;
    var key = req.body.userAccessKey;

    var sql = "SELECT * FROM profiles WHERE access_id = ? AND access_key = ?";

    var data = [id, key];

    db.query(sql, [...data], (err, result)=>{
        if(err){
            console.error(err.message);
            res.send(err);
        }else{
            if(result.length > 0){
                res.send(result);
            }else{
                res.send({message : "No User Exists with these ID informations."});
            }
        }
    });
});





app.get('/adminAccess', (req,res)=>{

    var id = req.body.id;
    var key = req.body.key;
    //var sql = 'SELECT * FROM profiles WHERE id = `{}` AND key = `{}`';

    //db.query(sql, {});
    res.send('Welcome to my new page');

});

app.get('/userProfile', (req,res)=>{

    var id = req.body.id;
    var key = req.body.key;
    //var sql = 'SELECT * FROM profiles WHERE id = `{}` AND key = `{}`';

    //db.query(sql, {});
    res.send('Welcome to my new page');

});

app.get('/editProfile', (req,res)=>{

    var id = req.body.id;
    var key = req.body.key;
    //var sql = 'SELECT * FROM profiles WHERE id = `{}` AND key = `{}`';

    //db.query(sql, {});
    res.send('Welcome to my new page');

});

app.get('/deleteProfile', (req,res)=>{

    var id = req.body.id;
    var key = req.body.key;
    //var sql = 'SELECT * FROM profiles WHERE id = `{}` AND key = `{}`';

    //db.query(sql, {});
    res.send('Welcome to my new page');

});


app.listen(3001, ()=>{
    console.log('...Sever successfully created');
});