import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setMessage("⚠️ Please enter a valid email.");
      return;
    }

    // Here’s where you'd normally send the email to your backend/API
    console.log("Subscribed with:", email);

    setEmail(""); // clear input
    setMessage("🎉 Thanks for subscribing! Check your inbox soon.");
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input
          type="email"
          placeholder="Your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {message && <p className="newsletter-message">{message}</p>}
    </div>
  );
};

export default NewsLetter;
