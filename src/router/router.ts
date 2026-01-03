import { Router } from 'express'

import { accountRoute } from '../module/accounts/accounts.routes'
import { transactionRoute } from '../module/transaction/transaction.routes'
import { reportRouter } from '../module/report/report.routes'

const router = Router()

router.use('/account', accountRoute)
router.use('/transaction', transactionRoute)
router.use('/report', reportRouter)

export default router
