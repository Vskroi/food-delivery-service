export const validateUserEmail = async (req , res) => {
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      res.status(400).send({
        success: false,
        message: "Email already in use.",
      });
    }
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Email",
    });
  }
};
