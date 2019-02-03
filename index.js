import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.send("Use POST");
});

app.post('/upload-logs', (req, res) => {
    const message = req.body.message || 'No Message';
    const logLevel = req.body.level || 'LOG';
    console.log(`## ${logLevel} message: `, message);
    console.info(`$$ ${logLevel} message: `, message);
    console.debug(`%% ${logLevel} message: `, message);
    return res.send("OK");
});

export default app;
