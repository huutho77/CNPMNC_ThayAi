import { UserModel } from "../models/userModel.js";
import { CustomerModel } from "../models/customerModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

/**
 * @description Route function Register New User
 * @method POST
 * @route /api/auth/register
 * @body { username, password }
 * @param {*} req
 * @param {*} res
 * @access Public
 * @returns New user and accessToken
 */
export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  // Check for username and password is missing or empty.
  if (!username || !password) {
    return res.json({
      statusCode: 400,
      success: false,
      msg: "Username or Password is empty.",
    });
  }

  try {
    // Check for User is existing
    const user = await UserModel.findOne({ username: username });
    if (user) {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        msg: "This username is existing.",
      });
    }

    // Hash password
    const hashedPassword = await argon2.hash(password);
    const newUser = new UserModel({
      username: username,
      password: hashedPassword,
    });
    await newUser.save();

    // Check for Customer is existing by userId
    let customer = await CustomerModel.findOne({ userId: newUser._id });
    if (!customer) {
      const newCustomer = new CustomerModel({ userId: newUser._id });
      await newCustomer.save();
    } else {
      customer.userId = user._id;
    }

    res
      .status(200)
      .json({ success: true, msg: "Successful new account registration." });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, error: error });
  }
};

/**
 * @description Route with function login user
 * @method POST
 * @route /api/auth/login
 * @body { username, password }
 * @param {*} req
 * @param {*} res
 * @access Public
 * @returns accessToken
 */
export const signIn = async (req, res) => {
  const { username, password } = req.body;

  // Check for username or password is empty
  if (!username || !password) {
    return res.json({
      status: 400,
      msg: "Missing username or password. Please check.",
    });
  }

  const user = await UserModel.findOne({ username: username });

  // Check for username is existing
  if (!user) {
    return res.json({
      status: 400,
      msg: "Unable to find account information for this username.",
    });
  }

  // Check for hashed password
  let isCheckedPW = await argon2.verify(user.password, password);
  if (isCheckedPW) {
    // Generate access token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.JWT_KEY,
      { expiresIn: 600 }
    );

    // return access token if login is successfully
    return res.json({
      status: 200,
      accessToken: accessToken,
    });
  }
};
