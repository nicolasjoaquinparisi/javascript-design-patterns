import dotenv from "dotenv";
dotenv.config();

const VALID_PASSWORD_LENGTH = process.env.VALID_PASSWORD_LENGTH;

const lowPasswordStrategy = {
  applyPasswordPolicy: function (password) {
    return password.length >= VALID_PASSWORD_LENGTH;
  },
};

export default lowPasswordStrategy;
