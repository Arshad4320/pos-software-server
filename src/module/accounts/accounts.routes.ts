import { Router } from 'express'
import { AccountController } from './accounts.controller'

const router = Router()
router.post('/create-account', AccountController.createAccount)
router.post('/get-accounts', AccountController.getAllAccounts)
router.post('/get-account/:id', AccountController.getAccountById)
router.post('/update-account/:id', AccountController.updateAccount)
router.post('/delete-account/:id', AccountController.deleteAccount)

export const accountRoute = router
