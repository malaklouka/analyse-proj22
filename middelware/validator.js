const { check, validationResult } = require("express-validator");
exports.registerRules = () => 
  [
    check("name", "name is required").notEmpty(),
    check("surname", "surname is required").notEmpty(),
    check("email", "email is required").notEmpty(),
    check("email", "check email form").isEmail(),
    check("password", "password is invalid")
      .not()
      .isIn(["123", "password", "god"])
      .withMessage("Do not use a common word as the password")
      .isLength({ min: 5, max: 15 })
      .matches(/\d/),
  ];

exports.loginRules = () => 
    [
     
      check("email", "email is required").notEmpty(),
      check("email", "check email form").isEmail(),
      check("password", "password is invalid")
        .not()
        .isIn(["123", "password", "god"])
        .withMessage("Do not use a common word as the password")
        .isLength({ min: 5, max: 15 })
        .matches(/\d/),
    ];
 
exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({errors:errors.array().map((elt)=>({msg:elt.msg,}))})
    }
    next();
}