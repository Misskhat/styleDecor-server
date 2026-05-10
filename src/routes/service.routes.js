const express = require("express");
const {
  serviceGet,
  servicePost,
  getServiceById,
} = require("../services/service.services");
const { verifyToken } = require("../middleware/verifyToken");
const { verifyAdmin } = require("../middleware/verifyAdmin");
const router = express.Router();

router.get("/", serviceGet);
router.get("/:id", getServiceById);
router.post("/", verifyToken, verifyAdmin, servicePost);

module.exports = router;
