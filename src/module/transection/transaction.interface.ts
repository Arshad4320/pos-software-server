import { Types } from 'mongoose'

type TransactionType = 'sales' | 'purchase' | 'receipt' | 'payment'

export interface ITransaction {
  date: Date
  description: string
  transactionType: TransactionType
  debitAccount: Types.ObjectId
  creditAccount: Types.ObjectId
  amount: number
}
