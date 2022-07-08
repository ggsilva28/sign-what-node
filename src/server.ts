import { serverHttp } from "./app"

serverHttp.listen(process.env.PORT || 3003, () => {
    console.log("Server online")
})