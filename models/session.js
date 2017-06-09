import mongoose from 'mongoose'

const SessionSchema = new mongoose.Schema({
  sid: {
    type: String
  },
  val: {}
})

export default mongoose.model('Session', SessionSchema)
