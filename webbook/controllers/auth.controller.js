const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "login");
const connect = require('../config/connectMYSQL');
var exports = module.exports = {};

exports.signup = function(req, res) {
    res.status(jsonMessages.user.duplicate.status).send(jsonMessages.user.duplicate);
};
exports.signupSuccess = function(req, res) {
    res.status(jsonMessages.user.signupSuccess.status).send(jsonMessages.user.signupSuccess);
};

exports.signin = function(req, res) {
    res.status(jsonMessages.user.invalid.status).send(jsonMessages.user.invalid);
};

exports.signinSuccess = function(req, res) {
      res.status(jsonMessages.user.signupSuccess.status).send(jsonMessages.user.signinSuccess);

  /*  const id = global.sessData.passport.user;
    var msgFinal = {
        MSG: id,
        msg: "Success",
        message: {
            eng: "Login with sucess",
            pt: "Login com sucesso"
        },
        status: 200,
        success: true
    }
    console.log(msgFinal);
    res.send(msgFinal);*/
}


exports.logout = function(req, res, err) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
            res.status(jsonMessages.user.logoutError.status).send(jsonMessages.user.logoutError);
        }
        res.status(jsonMessages.user.logoutSuccess.status).send(jsonMessages.user.logoutSuccess);
    });
};
