import { IAccounts } from './accounts.interface'
import { AccountModel } from './accounts.model'

const createAccount = async (payload: IAccounts) => {
  try {
    const result = await AccountModel.create(payload)
    return result
  } catch (err) {
    console.log(err)
  }
}
const getAllAccounts = async () => {
  try {
    const result = await AccountModel.find().sort({ name: 1 })
    return result
  } catch (err) {
    console.log(err)
  }
}
const getAccountById = async (id: string) => {
  try {
    const result = await AccountModel.findById(id)
    return result
  } catch (err) {
    console.log(err)
  }
}
const updateAccount = async (id: string, payload: IAccounts) => {
  try {
    const result = await AccountModel.findByIdAndUpdate(id, payload, {
      new: true,
    })
    return result
  } catch (err) {
    console.log(err)
  }
}
const deleteAccount = async (id: string) => {
  try {
    const result = await AccountModel.findByIdAndDelete(id, { new: true })
    return result
  } catch (err) {
    console.log(err)
  }
}

export const AccountServices = {
  createAccount,
  getAllAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
}
