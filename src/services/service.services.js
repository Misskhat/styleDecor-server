const serviceModel = require('../models/service.model')

const serviceGet = async (req, res) => {
  try {
    const services = await serviceModel.find()
    return res.send({
      message: 'services fetch successfully',
      services,
    })
  } catch (error) {
    return res.send({ message: 'Something went wrong', error })
  }
}
const servicePost = async (req, res) => {
  try {
    const service = req.body
    const newService = await serviceModel.create({ ...service })
    return res.send({
      message: 'Successfully added new services',
      newService,
    })
  } catch (error) {
    return res.send({ message: ('Something went wrong', error) })
  }
}

module.exports = { serviceGet, servicePost }
