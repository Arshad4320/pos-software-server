import { Request, Response } from 'express'
import { ReportServices } from './report.services'

const getJournalReport = async (req: Request, res: Response) => {
  try {
    const result = await ReportServices.getJournalReport()
    res.json({
      success: true,
      message: 'journal report retrived successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}
const getBalanceSheet = async (req: Request, res: Response) => {
  try {
    const result = await ReportServices.getBalanceSheet()
    res.json({
      success: true,
      message: 'balance sheet retrived successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}
const getIncomeStatement = async (req: Request, res: Response) => {
  try {
    const result = await ReportServices.getIncomeStatement()
    res.json({
      success: true,
      message: 'income statement retrived successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}
export const ReportController = {
  getJournalReport,
  getBalanceSheet,
  getIncomeStatement,
}
