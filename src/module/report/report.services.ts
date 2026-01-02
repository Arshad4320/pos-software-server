import { AccountModel } from '../accounts/accounts.model'
import { TransactionModel } from '../transection/transaction.model'

const getJournalReport = async () => {
  try {
    const result = await TransactionModel.find()
      .populate('debitAccount creditAccount')
      .sort({ date: -1 })
    return result
  } catch (err) {
    console.log(err)
  }
}
//  enum: ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
const getBalanceSheet = async () => {
  try {
    const accounts = await AccountModel.find()

    const assets = accounts.filter(acc => acc.type === 'Asset')
    const liability = accounts.filter(acc => acc.type === 'Liability')
    const equity = accounts.filter(acc => acc.type === 'Equity')
    const totalAssets = assets.reduce((sum, acc) => sum + acc.balance, 0)
    const totalLiability = liability.reduce((sum, acc) => sum + acc.balance, 0)
    const totalEquity = equity.reduce((sum, acc) => sum + acc.balance, 0)
    return {
      assets,
      liability,
      equity,
      totalAssets,
      totalLiability,
      totalEquity,
      isBalanced: totalAssets === totalLiability + totalEquity,
    }
  } catch (err) {
    console.log(err)
  }
}

const getIncomeStatement = async () => {
  try {
    const accounts = await AccountModel.find()
    const revenue = accounts.filter(acc => acc.type === 'Revenue')
    const expense = accounts.filter(acc => acc.type === 'Expense')
    const totalRevenue = revenue.reduce((sum, acc) => sum + acc.balance, 0)
    const totalExpense = expense.reduce((sum, acc) => sum + acc.balance, 0)
    return {
      revenue,
      expense,
      netProfit: totalRevenue - totalExpense,
    }
  } catch (err) {
    console.log(err)
  }
}

export const ReportServices = {
  getJournalReport,
  getBalanceSheet,
  getIncomeStatement,
}
