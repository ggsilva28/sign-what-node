import { Request, Response } from "express";
import { MailerService } from "../services/MailerService";

class RecoverPassController {
  async verifyEmail(request: Request, response: Response) {
    const service = new MailerService();

    try {
      const user = await service.send("rafaelcmarti@hotmail.com", "", {  });

      return response.status(200).json({
        code: 200,
        message: "mail.send",
        data: user,
      });
    } catch (err) {
      return response.status(400).json({
        code: 400,
        message:"mail.error",
        error: err,
      });
    }
  }
}
export { RecoverPassController };


/*
    ENVIAR EMAIL COM TEMPLATE
    VERIFICAR USUARIO EXISTE
    CRIAR UM CODIGO
    - CRIAR TABELA EMAIL
    - CRIAR TABELA CODIGO
    VERIFICAR COD VALIDO
    ALTERAR SENHA
*/