const mongoose = require('mongoose')

const projectSchema =new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  total_value:{
    type: Number,
    required: true
  },
  utility:{
    type: Number
  }
})

module.exports = mongoose.model('Project', projectSchema)
