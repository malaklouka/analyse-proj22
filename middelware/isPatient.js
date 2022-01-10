const isPatient = (req, res, next) => {
    if (req.user.role == "patient") {
      next();
    } else {
      res.status(401).send({ errors: [{ msg: "you are not authorized as patient" }] });
    }
  };
  module.exports = isPatient;