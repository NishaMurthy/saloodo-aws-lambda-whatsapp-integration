'use strict';

const mysql = require('mysql');

module.exports.handler = (event) => {
    if (Object.keys(event).length === 0) {
        console.log("No data");
    } else {

        const response = {
            statusCode: 200,
            body: event
        };
        return response;
    }
}
