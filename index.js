import express  from "express";
import jwt from 'jsonwebtoken'
//---------------

const app = express();
app.use(express.json());
//---------------


app.get('/', (req, res) => {
    res.send('Hello')
});


app.post('/auth/login', (req, res)=>{
    console.log(req.body);

const token = jwt.sign({
    email: req.body.email,
    fullName: "Вася Пупкин",
}, 'secret123');

    res.json({
        "success" : true,
        token,
    })
})

app.listen(4444, (err) => {
 if (err) {
    console.log(err);
 }
    console.log("Server ok")
})