import express  from "express";
//---------------

const app = express();
app.use(express.json());
//---------------


app.get('/', (req, res) => {
    res.send('Hello')
});


app.post('/auth/login', (req, res)=>{
    console.log(req.body);
    res.json({
        "success" : true
    })
})

app.listen(4444, (err) => {
 if (err) {
    console.log(err);
 }
    console.log("Server ok")
})