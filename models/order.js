const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    address: {
      type: String,
    },
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        count: Number,
        topping: String,
      },
    ],
    cartTotal: Number,
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Chưa xử lý",
      enum: ["Chưa xử lý", "Đang xử lý", "Đang giao", "Đã hủy", "Đã giao"],
    },
    orderedBy: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
