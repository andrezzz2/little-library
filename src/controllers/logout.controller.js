const path = require('path');

exports.LogoutPage = (req, res) => {
    //apagar cookies
    res.clearCookie('token');
    res.clearCookie('username');
    res.clearCookie('userType');
    res.redirect('http://localhost:3000');
}
