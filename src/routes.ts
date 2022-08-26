import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { AuthController } from "./controllers/AuthController";
import { SignatureController } from "./controllers/SignatureController";
import { RecoverPassController } from "./controllers/RecoverPassController";

import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { passwordHash } from "./middleware/passwordHash";


const router = Router()

router.get("/")

//User
router.get("/user/profile", ensureAuthenticated, new UserController().profile)
router.post("/user/create", passwordHash, new UserController().create)

//Auth
router.post("/auth/login", passwordHash, new AuthController().login)
router.get("/auth/token", ensureAuthenticated, new AuthController().token)

//Signatures
router.get("/signatures/active", ensureAuthenticated, new SignatureController().active)
router.get("/signatures/canceled", ensureAuthenticated, new SignatureController().canceled)
router.post("/signatures/create", ensureAuthenticated, new SignatureController().create)
router.get("/signatures/view/:id", ensureAuthenticated, new SignatureController().view)
router.put("/signatures/update/:id", ensureAuthenticated, new SignatureController().update)
router.put("/signatures/cancel/:id", ensureAuthenticated, new SignatureController().cancel)
router.delete("/signatures/delete/:id", ensureAuthenticated, new SignatureController().delete)

//RecorverPass
router.post("/recover/verify-email", new RecoverPassController().verifyEmail)

export { router }