import express from 'express';

const app = express()
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.send("Use POST");
});

app.post('/', (req, res) => {
    const message = req.body.message || 'No Message';
    const logLevel = req.body.level || 'LOG';
    console.log(`## ${logLevel} message: `, message);
    console.info(`$$ ${logLevel} message: `, message);
    console.debug(`%% ${logLevel} message: `, message);
    return res.send("OK");
});

app.listen(port, () => console.log(`Hello app listening on port ${port}!`));

export default app;