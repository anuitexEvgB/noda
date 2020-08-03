const express = require('express');
const mongoose = require('mongoose');
const geoRoutes = require('./routes/geo');
const config = require('config');

const PORT = config.get('port') || 5000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(geoRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb://map:map@localhost:27017/history-map',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
            );
        app.listen(PORT, () => {
            console.log('START ' + PORT)
        })

    } catch (e) {
        console.log('Server error',  e.message)
        process.exit(1);
    }
}

start();
