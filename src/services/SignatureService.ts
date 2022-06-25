import { prismaClient } from "../prisma"

class SignatureService {

    private STATUS = {
        ACTIVE: 1,
        CANCELED: 2,
    }

    async active() {
        try {
            const list = await prismaClient.signatures.findMany({
                where: {
                    status: this.STATUS.ACTIVE,
                },
            })

            return list
        } catch (err) {
            throw err
        }
    }

    async canceled() {
        try {
            const list = await prismaClient.signatures.findMany({
                where: {
                    status: this.STATUS.CANCELED,
                },
            })

            return list
        } catch (err) {
            throw err
        }
    }

    async view(id) {
        const signature = await prismaClient.signatures.findFirst({
            where: {
                id,
            },
        })

        if(!signature) {
            throw "signature.view.not_found"
        }

        return signature;
    }

    async create(data) {

        try {
            const signature = await prismaClient.signatures.create({
                data: {
                    userId: data.userId,
                    companyId: data.companyId || null,
                    name: data.name,
                    value: data.value,
                    startDate: data.startDate,
                    chargeDate: data.chargeDate,
                    cancelDate: data.cancelDate,
                    reminder: data.reminder ? 1 : 0,
                    status: this.STATUS.ACTIVE,
                },
            })


            return signature
        } catch (err) {
            throw "signature.create.error"
        }
    }

    async update(id, data) {
        try {
            const signature = await prismaClient.signatures.update({
                where: {
                    id,
                },
                data: {
                    userId: data.userId,
                    companyId: data.companyId || null,
                    name: data.name,
                    value: data.value,
                    startDate: data.startDate,
                    chargeDate: data.chargeDate,
                    cancelDate: data.cancelDate,
                    reminder: data.reminder,
                    status: data.status,
                },
            })

            return signature
        } catch (err) {
            throw "signature.update.error"
        }
    }

    async cancel(id) {
        try {
            const signature = await prismaClient.signatures.update({
                where: {
                    id,
                },
                data: {
                    status: this.STATUS.CANCELED,
                },
            })

            return signature
        } catch (err) {
            throw err
        }
    }

    async delete(id) {
        try {
            const signature = await prismaClient.signatures.delete({
                where: {
                    id,
                },
            })

            return signature
        } catch (err) {
            throw err
        }
    }
}

export { SignatureService }