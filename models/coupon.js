const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const couponSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      uppercase: true,
      required: "Phải nhập tên mã giảm giá",
      minlength: [6, "Quá ngắn"],
      maxlength: [12, "Quá dài"],
    },
    expiry: {
      type: Date,
      required: true,
    },
    discount: {
      type: Number,
      required: true,  
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
