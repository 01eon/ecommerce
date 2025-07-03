import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(400).json({ error: error.message });
  }
}
