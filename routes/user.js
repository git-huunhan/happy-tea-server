const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controllers
const {
  userCart,
  getUserCart,
  saveAddress,
  getAddress,
} = require("../controllers/user");

router.post("/user/cart", authCheck, userCart); // saveCart
router.get("/user/cart", authCheck, getUserCart); // get cart
router.post("/user/address", authCheck, saveAddress);
router.get("/user/address", authCheck, getAddress);

// router.get("/user", (req, res) => {
//   res.json({
//     data: "hey you hit user API endpoint",
//   });
// });

module.exports = router;
