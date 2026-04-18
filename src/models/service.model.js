const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema(
  {
    service_name: { type: String, required: true },
    cost: { type: Number, required: true },
    unit: String,
    service_category: String,
    description: String,
    image: String,
    createdByEmail: String,
  },
  { timestamps: true },
)

const serviceModel = mongoose.model('service', serviceSchema)

module.exports = serviceModel
