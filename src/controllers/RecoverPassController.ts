import { Request, Response } from "express";
import { MailerService } from "../services/MailerService";
import { UserService } from "../services/UserService";

class RecoverPassController {
  async verifyEmail(request: Request, response: Response) {
    const { email } = request.body;
    let user = null;
    const service = new MailerService();
    const verify = new UserService().getEmail;
    try {
      user = await verify(email);
    } catch (err) {
      return response.status(400).json({
        code: 400,
        message: "mail.not_found",
        error: err.toString(),
      });
    }

    try {
      await service.send(user.email, "recover", {
        username: user.name,
        code: String,
      });

      return response.status(200).json({
        code: 200,
        message: "mail.send",
        data: user,
      });
    } catch (err) {
      return response.status(400).json({
        code: 400,
        message: "mail.error",
        error: err.toString(),
      });
    }
  }

  generateCode(length) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result)
    return result.toUpperCase();
  }

  async createCode(request:Request, response:Response, email: string){
    const date = new Date()
    date.setDate(date.getDate() + 1)
    const data = {  
      code: this.generateCode(6),
      email: email,
      validUntil: date,
    }
  }
}
export { RecoverPassController };

/*
    RECEBER E-MAIL DA REQUISIÇÃO - 50%
    VERIFICAR USUÁRIO EXISTE
    CRIAR UM CÓDIGO
    - CRIAR TABELA EMAIL
    - CRIAR TABELA CÓDIGO
    VERIFICAR COD VALIDO
    ALTERAR SENHA
*/
