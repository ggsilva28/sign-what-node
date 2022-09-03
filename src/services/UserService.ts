import { prismaClient } from "../prisma"

interface IUser {
    name: string
    email: string
    password: string
}

class UserService {

    async get(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        return user;
    }

    async create(data: IUser) {

        try {
            const user = await prismaClient.user.create({
                data:data
            })

            return user;
        } catch (err) {
            throw err;
        }

    }

    async getEmail(email: string){
        try{
            const user = await prismaClient.user.findFirst({
                where: {
                    email:email
                }
            })

            if(!user){
                throw 'user.not_found'
            }
            
            return user

        } catch(err){
            throw err;
        }
        
    }

}

export { UserService, IUser }