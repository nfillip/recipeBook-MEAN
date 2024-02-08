"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    }
};
const warn = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
    }
};
const error = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    }
};
const debug = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    }
};
exports.default = {
    info,
    warn,
    error,
    debug
};
