import express  from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
});

app.listen(4444, (err) => {
 if (err) {
    console.log(err);
 }
    console.log("Server ok")
})