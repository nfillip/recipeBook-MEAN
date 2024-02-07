"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const recipe_1 = __importDefault(require("./routes/recipe"));
const mongoose_1 = __importDefault(require("mongoose"));
const NAMESPACE = 'Server';
const router = (0, express_1.default)();
// Connect to Mongo
mongoose_1.default
    .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recipe101')
    .then((result) => {
    logging_1.default.info(NAMESPACE, 'Connected to mongoDB!');
})
    .catch((error) => {
    logging_1.default.error(NAMESPACE, error.message, error);
});
// Logging the request
router.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}],, IP - ${req.socket.remoteAddress}`);
    res.on('finish', () => {
        logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});
//PARSE REQUEST
//send nested JSON to API
router.use(body_parser_1.default.urlencoded({ extended: false }));
//don't have to call json.parse or json.stringify
router.use(body_parser_1.default.json());
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
router.use('/api/recipe', recipe_1.default);
// Error Handling
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
// Create the server
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `server running on ${config_1.default.server.hostname}: ${config_1.default.server.port}`));
