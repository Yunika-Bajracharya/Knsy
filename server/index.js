const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.json({
        message: 'full stack message board',
        krish: 'thisis a good start' 
    });
});

const port = process.env.PORT || 8976;

app.listen(port, () => {
    console.log(`listening on  ${port}`)
})

