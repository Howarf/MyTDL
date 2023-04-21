const express = require('express');
const app = express();
const PORT = 5000;
const user_inform = require('./router/user_inform');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use('/user_inform', user_inform);

app.get('/', (req,res) => {
    res.send("hi~!");
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})