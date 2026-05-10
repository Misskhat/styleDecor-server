const serviceModel = require("../models/service.model");

const serviceGet = async (req, res) => {
  try {
    const services = await serviceModel.find();
    return res.status(200).json({
      message: "services fetch successfully",
      services,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
};
const servicePost = async (req, res) => {
  try {
    const service = req.body;
    const newService = await serviceModel.create({ ...service });
    return res.status(200).json({
      message: "Successfully added new services",
      newService,
    });
  } catch (error) {
    return res.status(500).json({ message: ("Something went wrong", error) });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceModel.findById(id);
    return res.status(200).json({
      message: "Successfully fetch by Id",
      service,
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
};

module.exports = { serviceGet, servicePost, getServiceById };
