const isLabo = (req, res, next) => {
    if (req.user.role == "labo") {
      next();
    } else {
      res.status(401).send({ errors: [{ msg: "you are not authorized as labo" }] });
    }
  };
  module.exports = isLabo;