const express = require("express");
const bookingModel = require("../models/booking.model");

const createBooking = async (req, res) => {
  try {
    const {
      userEmail,
      serviceId,
      serviceName,
      bookingDate,
      location,
      status,
      isPaid,
    } = req.body;

    const booking = await bookingModel.create({
      userEmail,
      serviceId,
      serviceName,
      bookingDate,
      location,
      status,
      isPaid,
    });

    return res.status(200).json({
      message: "Booking successfully completed",
      booking,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", err });
  }
};

const getsAllBooking = async (req, res) => {
  try {
    const bookingData = await bookingModel.find();
    return res.status(200).json({
      message: "Booking data fetch successfully",
      bookingData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", err });
  }
};

const myBooking = async (req, res) => {
  try {
    const email = req.userInfo.email;
    const bookingData = await bookingModel.find({ userEmail: email });
    return res.status(200).json({
      message: "User data successfully fetch",
      bookingData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", err });
  }
};

const updateBooking = async (req, res) => {
  try {
    const updates = req.body;
    const { id } = req.params;
    const updateBooking = await bookingModel.updateOne(
      { _id: id },
      { $set: updates },
    );
    return res.status(200).json({
      message: "Successfully updates booking",
      updateBooking,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", err });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.userInfo;
    const booking = await bookingModel.findById(id);

    if (booking.userEmail !== email) {
      return res.status(403).json({ message: "403 Forbidden" });
    }

    const deletedBooking = await bookingModel.deleteOne({ _id: id });
    return res.status(200).json({
      message: "Successfully cancelled your Booking",
      deletedBooking,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", err });
  }
};

module.exports = {
  createBooking,
  getsAllBooking,
  myBooking,
  updateBooking,
  cancelBooking,
};
