const express = require('express');
const  mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const PORT =  process.env.PORT || 5000
app.use(bodyParser.json())
routes(app);

mongoose.connect(process.env.DBCONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connect Db successfully');
})
.catch((error) => {
    console.error('Error connecting to database:', error);
});

app.listen(PORT, () => {
       console.log(`Server start in ${PORT}`)
} )
