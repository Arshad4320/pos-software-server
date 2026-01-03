import { Types } from 'mongoose'

type TransactionType = 'Sales' | 'Purchase' | 'Receipt' | 'Payment'

export interface ITransaction {
  date: Date
  description: string
  transactionType: TransactionType
  debitAccount: Types.ObjectId
  creditAccount: Types.ObjectId
  amount: number
}
