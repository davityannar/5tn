const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    console.log(11111,req)
    let token = req.headers.authorization;
    console.log('token', token);

    if (token) {
        jwt.verify(token, 'secret', function(err, decoded) {
            if (err) {
                res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                next();
            }
        });     
    } else {
        res.status(403).send({ success: false, message: 'No token provided.' });
    }
};

module.exports.checkToken = checkToken;