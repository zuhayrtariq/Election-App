const jwt = require("jsonwebtoken");
const userAuth = (req, res, next) => {

    const token = req.cookies.username;
    if (!token) {
      return res.sendStatus(403);
    }
    try {
        // console.log("TOKEN",token)
      const data = jwt.verify(token, "JWTSecret");
   
      req.userId = data.username;
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };

  const adminAuth = (req, res, next) => {

    const adminUsernames = ['PN001255','PN001268','PN001228'];

    const token = req.cookies.adminUsername;
    if (!token) {
      return res.sendStatus(403);
    }

    try {
        // console.log("TOKEN",token)
      const data = jwt.verify(token, "JWTSecret");
      const userId = data.username.toUpperCase();
      if(!adminUsernames.includes(userId))
      {
        console.log("TRUE")
        return res.sendStatus(403)
      }
      else{
          req.adminUserId = userId;
          return next();

      }

    } catch {
      return res.sendStatus(403);
    }
  };

  module.exports = {userAuth,adminAuth}