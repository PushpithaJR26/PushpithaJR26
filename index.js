const app = require('express')();

const PORT =8080;

app.listen(
    PORT,
    () => console.log(`rver running on ${PORT}`)
);

app.get('/fruits', (req, res)=> {
    res.send({
        apple: 2,
        banana: 12
    })
app.get('/vegetable', (req, res)=> {
    res.send({
        potato: 2,
        cabage: 12
    })
});