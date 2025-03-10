import validator from "validator";
export const validateEmailAndPassword = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      success: false,
      message: "Email and password are required.",
    });
  } else {
    next();
  }
};
