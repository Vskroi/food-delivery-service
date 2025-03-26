/* import { Users } from "../../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const generateAuthToken = (userId, email) => {
  const secretKey = process.env.JWT_SECRET ;
  return jwt.sign({ userId, email }, secretKey, { expiresIn: "1h" });
};

export const checkUserSigned = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Account not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateAuthToken(user._id, user.email);

    res.localStorage("token", token, {
      success: true,
      message:"logged in",
      maxAge: 3600000,
    });

    return res.status(200).json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

 */


import { Users } from "../../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const checkUserSigned = async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    const isSigned = await Users.findOne({ email });
    
    if (!isSigned) {
      return res.status(404).json({
        success: false,
        message: "Account not found",
      });
    }

 
    const isCorrect = await bcrypt.compare(password, isSigned.password);
    
    if (!isCorrect) {
      return res.status(401).json({
        success: false,
        message: "Wrong password",
      });
    }

    
    const expirationTime = 60 * 60; 
    const token = jwt.sign(
      {
        data: isSigned,
      },
      process.env.JWT_SECRET || "fallback-secret",  
      { expiresIn: expirationTime }  
    );

    return res.status(200).json({
      success: true,
      message: "Logged in",
      token: token,
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `User sign-in error: ${error.message}`,
    });
  }
};
