const crypto = require("crypto");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, slug } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !slug) {
    return res.status(400).json({ verified: false, error: "Missing fields" });
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  const isValid = expectedSignature === razorpay_signature;

  if (!isValid) {
    return res.status(400).json({ verified: false });
  }

  // Payment is genuine. Issue a simple signed token the front-end can store
  // and re-check, tying it to this specific form + payment id.
  const token = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(slug + "|" + razorpay_payment_id)
    .digest("hex");

  res.status(200).json({ verified: true, token, paymentId: razorpay_payment_id });
};