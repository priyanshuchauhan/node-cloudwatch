import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const result = 23;
    const result1 = req.body;
    console.log(`#### Log info start'`, result1);
    res.send(`Hello World! Result: ${result}`);
    // return res.send("OK");
});

app.listen(port, () => console.log(`Hello app listening on port ${port}!`));
export default app;
