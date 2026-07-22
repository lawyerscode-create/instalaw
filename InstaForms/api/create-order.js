const Razorpay = require("razorpay");

const PRICES = {
  "sale-deed": 29,
  "rent-lease-agreement": 99,
  "gift-deed": 39,
  "power-of-attorney-property": 149,
  "mutation-application": 39,
  "marriage-registration-application": 49,
  "mutual-consent-divorce-petition": 149,
  "maintenance-application": 149,
  "will-testament": 149,
  "adoption-deed": 149,
  "fir-format": 39,
  "regular-bail-application": 49,
  "anticipatory-bail": 129,
  "private-criminal-complaint": 129,
  "vakalatnama": 39,
  "plaint-civil-suit": 229,
  "written-statement": 149,
  "legal-notice": 49,
  "general-affidavit": 49,
  "partnership-deed": 149,
  "spice-plus-incorporation": 149,
  "moa-aoa": 149,
  "partnership-firm-registration": 149,
  "nda": 149,
  "employment-appointment-letter": 79,
  "consumer-complaint-edaakhil": 149,
  "legal-notice-consumer": 49,
  "termination-relieving-letter": 49,
  "epf-withdrawal-form": 149,
  "gratuity-application": 49,
  "industrial-disputes-complaint": 149,
  "rti-application-form": 49,
  "pan-application-form": 29,
  "gst-registration-form": 49,
  "itr-filing": 49,
  "passport-application": 59
};

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { slug } = req.body || {};
    const price = PRICES[slug];

    if (!slug || !price) {
      return res.status(400).json({
        error: "Unknown form"
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });

    const order = await razorpay.orders.create({
      amount: price * 100,
      currency: "INR",
      receipt: `instaforms_${slug}_${Date.now()}`,
      notes: {
        form: slug
      }
    });

    return res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });

  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);

    return res.status(500).json({
      error: "Could not create order",
      details: err.message
    });
  }
};
