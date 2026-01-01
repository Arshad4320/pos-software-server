import mongoose, { model, Schema } from 'mongoose'

const AccountSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
    },
  },
  { timestamps: true },
)

export const AccountModel = model('Account', AccountSchema)
