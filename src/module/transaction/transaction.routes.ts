import { Router } from 'express'
import { TransactionController } from './transaction.controller'

const router = Router()
router.post('/create-transaction', TransactionController.createTransaction)
router.get('/transactions', TransactionController.getAllTransactions)

export const transactionRoute = router
