const isHelper = (req, res, next) => {
    if (req.user.role == "helper") {
      next();
    } else {
      res.status(401).send({ errors: [{ msg: "you are not authorized as helper" }] });
    }
  };
  module.exports = isHelper;