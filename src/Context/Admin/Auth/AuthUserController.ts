import IAuthUser from "./IAuthUser";
const users = require("./../../../../models").user;
const bcrypt = require("bcrypt");
import { tk } from'./../../../config/app-config';
const jwt = require("jsonwebtoken");

class AuthUserController {
  async login(form: { email: ""; password: "" }) {
    const hash = bcrypt.hashSync(form.password, 10);
    const result = await users.findAll({
      where: {
        email: form.email,
      },
    });
    if (result.length == 0) {
      return {
        status: "error",
        msg: "usuario no existe",
      };
    }
    const match = await bcrypt.compare(form.password, result[0].password);

    if (match) {
      return {
        status: "success",
        token: jwt.sign(
          {
            id: result[0].id,
            full_name: result[0].full_name,
            email: result[0].email,
          },
          tk,
          { expiresIn: "1800s" }
        ),
      };
    }
    return {
        status: 'error',
        message : 'La Contraseña no corresponde'
    }
  }
}

export default AuthUserController;
