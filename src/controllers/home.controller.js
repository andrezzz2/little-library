const User = require('../models/user.js');
const Book = require('../models/book.js');
const path = require('path');

exports.getPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/homepage.html'));
}

exports.getJsPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/js/homepage.js'));
}
