import { Router } from 'express'
import { ReportController } from './report.controller'

const router = Router()
router.get('/journal', ReportController.getJournalReport)
router.get('/balance-sheet', ReportController.getBalanceSheet)
router.get('/income-statement', ReportController.getIncomeStatement)

export const reportRouter = router
