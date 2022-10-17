import mongoose from "mongoose"

mongoose.connect(
  "mongodb+srv://yan:1234@yan.haimxhv.mongodb.net/patchwork-com-arte"
  )

const db = mongoose.connection

export default db