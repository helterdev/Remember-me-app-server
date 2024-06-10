import jwt from "jsonwebtoken";
import accessenv from "../config";
//creamos una funcion que genera los tokens
export const createAccessToken = (payload: jwt.JwtPayload) => {
  return new Promise((resolve: any, reject: any) => {
    jwt.sign(
      payload,
      accessenv.JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          return reject(err);
        }
        return resolve(token);
      }
    );
  });
};
