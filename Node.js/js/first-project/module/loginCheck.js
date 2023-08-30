const loginCheck = (req, res, next) => {
  const userLogin = true;
  if (userLogin) {
    next();
  } else {
    res.suatus(400).json({
      message: "login fail",
    });
  }
};

module.exports = loginCheck;
