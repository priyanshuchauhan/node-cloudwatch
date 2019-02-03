import express from 'express';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(awsServerlessExpressMiddleware.eventContext())


app.get('/', (req, res) => {
    console.log('## THIS IS A GET TEST');
    res.send("Use POST");
});

app.post('/', (req, res) => {
    const message = req.body.message || 'No Message';
    const logLevel = req.body.level || 'LOG';
    console.log(`## ${logLevel} message: `, message);
    console.info(`$$ ${logLevel} message: `, message);
    console.debug(`%% ${logLevel} message: `, message);
    res.send("OK");
});

export default app;
