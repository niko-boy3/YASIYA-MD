const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~NJgyESoa#LhN2jX89YpPyZz7IvM3YKuaeqf9EkD3aFoLg4z-6pIo'
};
