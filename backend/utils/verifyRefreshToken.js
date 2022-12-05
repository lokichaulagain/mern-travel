//Logic to verify Refresh Token
import UserToken from "../models/UserToken.js";
import jwt from "jsonwebtoken";

const verifyRefreshToken = (refreshToken) => {
  const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;
  return new Promise((resolve, reject) => {
    UserToken.findOne({ token: refreshToken }, (err, doc) => {
      //if we did not find any document
      if (!doc)
        return reject({ error: true, message: "Invalid refresh token" });

      //if  found  document verify that
      jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
        //if token is invalid
        if (err)
          return reject({ error: true, message: "Invalid refresh token" });
        //if token is valid
        resolve({
          tokenDetails,
          error: false,
          message: "Valid refresh token",
        });
      });
    });
  });
};

export { verifyRefreshToken };