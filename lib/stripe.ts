/**
 * Stripe client — scaffolded for future use.
 * Never import this in client components — the secret key must stay server-side.
 */
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

export const stripe = key
  ? new Stripe(key, {
      apiVersion: "2025-02-24.acacia",
      typescript: true,
      appInfo: { name: "AI Does My Work", url: "https://aidoesmywork.com" },
    })
  : null;
