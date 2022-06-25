import { serverHttp } from "./app"

serverHttp.listen(3003, () => {
    console.log("Server online")
})