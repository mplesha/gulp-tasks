'use strict';

const server = {
    ip: process.argv[2] || process.env.NODE_IP || '0.0.0.0',
    port: process.argv[3] || process.env.NODE_PORT || 8080
};

module.exports = {
    server
};
