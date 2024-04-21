
const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./router');


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3033;
const host = process.env.HOST || 'localhost';


const mongoose = require('mongoose');

const mongoUri =  'mongodb+srv://root:root@books-store-mern.pl4k5pa.mongodb.net/USers-collection?retryWrites=true&w=majority&appName=Books-Store-MERN';

const connect = async () => {
    try{
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('Error connecting to MongoDB',error);
    }
};

connect();

app.use('/api', router);

const server = app.listen(port, host, () => {
    console.log(`Express is running on port ${server.address().port}`);
});


