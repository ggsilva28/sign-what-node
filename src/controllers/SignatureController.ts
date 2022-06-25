import { Request, Response } from "express"
import { SignatureService } from "../services/SignatureService"

class SignatureController {

    async active(request: Request, response: Response) {
        const service = new SignatureService()

        try {
            const user = await service.active()

            return response.json({
                code: 200,
                message: 'signatures.listed',
                data: user
            })
        } catch (err) {

            return response.json({
                code: 400,
                error: err
            })
        }
    }

    async canceled(request: Request, response: Response) {
        const service = new SignatureService()

        try {
            const user = await service.canceled()

            return response.json({
                code: 200,
                message: 'signatures.listed',
                data: user
            })
        } catch (err) {

            return response.json({
                code: 400,
                error: err
            })
        }
    }

    async view(request: Request, response: Response) {
        const service = new SignatureService()

        try {
            const user = await service.view(request.params.id)

            return response.json({
                code: 200,
                message: 'signatures.view',
                data: user
            })
        } catch (err) {

            return response.json({
                code: 400,
                error: err
            })
        }
    }

    async create(request: Request, response: Response) {
        const { user_id, body } = request

        const service = new SignatureService()

        try {
            const user = await service.create({ ...body, userId: user_id })

            return response.json({
                code: 200,
                message: 'signatures.create',
                data: user
            })
        } catch (err) {

            return response.json({
                code: 400,
                error: err
            })
        }
    }

    async update(request: Request, response: Response) {
        const service = new SignatureService()

        try {
            const user = await service.update(request.params.id, request.body)

            return response.json({
                code: 200,
                message: 'signatures.update',
                data: user
            })
        } catch (err) {

            return response.json({
                code: 400,
                error: err
            })
        }
    }

    async cancel(request: Request, response: Response) {
        const service = new SignatureService()

        try {
            const user = await service.cancel(request.params.id)

            return response.json({
                code: 200,
                message: 'signatures.canceled',
                data: user
            })
        } catch (err) {

            return response.json({
                code: 400,
                error: err
            })
        }
    }

    async delete(request: Request, response: Response) {
        const service = new SignatureService()

        try {
            const user = await service.delete(request.params.id)

            return response.json({
                code: 200,
                message: 'signatures.deleted',
                data: user
            })
        } catch (err) {

            return response.json({
                code: 400,
                error: err
            })
        }
    }
}

export { SignatureController }