"use client";
import styles from "./Payment.module.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Payment({ total }) {
  const options = {
    mode: "payment",
    amount: Math.round(total * 100),
    currency: "usd",
  };

  return (
    <div className={styles.payment}>
      <h1>Payment Info.</h1>
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm amount={total} />
      </Elements>
    </div>
  );
}
