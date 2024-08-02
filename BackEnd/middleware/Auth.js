const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const verify = jwt.verify(token, "Dummy Text for Encryption");
    console.log(verify);
    next();
  } catch (err) {
    res.json({ msg: "Invalid Token" });
  }
};
module.exports = Auth;
