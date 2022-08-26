import { Request, Response } from "express";
import { MailerService } from "../services/MailerService";

class RecoverPassController {
  async verifyEmail(request: Request, response: Response) {
    const service = new MailerService();

    try {
      const user = await service.send("gagsilva28@gmail.com", "recover", { username: 'Gabriel' });

      return response.status(200).json({
        code: 200,
        message: "mail.send",
        data: user,
      });
    } catch (err) {

      return response.status(400).json({
        code: 400,
        message:"mail.error",
        error: err.toString(),
      });
    }
  }
}
export { RecoverPassController };


/*
    RECEBER E-MAIL DA REQUISIÇÃO
    VERIFICAR USUÁRIO EXISTE
    CRIAR UM CÓDIGO
    - CRIAR TABELA EMAIL
    - CRIAR TABELA CÓDIGO
    VERIFICAR COD VALIDO
    ALTERAR SENHA
*/