import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import recipeRoutes from './routes/recipe';
import mongoose from 'mongoose';
const NAMESPACE = 'Server';
const router = express();

// Connect to Mongo
mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recipe101')
    .then((result) => {
        logging.info(NAMESPACE, 'Connected to mongoDB!');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });


// Logging the request
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}],, IP - ${req.socket.remoteAddress}`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});

//PARSE REQUEST
//send nested JSON to API
router.use(bodyParser.urlencoded({ extended: false }));
//don't have to call json.parse or json.stringify
router.use(bodyParser.json());

// RULES OF API
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});

// Routes
router.use('/api/recipe', recipeRoutes);
// Error Handling
router.use((req, res, next) => {
    const error = new Error('not found');

    return res.status(404).json({
        message: error.message
    });
});

// Create the server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `server running on ${config.server.hostname}: ${config.server.port}`));
