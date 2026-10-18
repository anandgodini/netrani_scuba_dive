"use client";

import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Subscription failed. Please try again.");
      }

      setStatus("success");
      setMessage(data.message || "Subscribed successfully!");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full items-center bg-[#ffffff] rounded-full border border-black p-1.5 shadow-[3px_3px_0px_#000000] focus-within:shadow-[1px_1px_0px_#000000] transition-all"
      >
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          disabled={status === "loading" || status === "success"}
          placeholder={status === "success" ? "Thank you for subscribing!" : "Enter your email"}
          aria-label="Email Address for newsletter updates"
          required
          className="bg-transparent text-black px-4 py-2.5 outline-none w-full placeholder:text-black/50 text-xs font-bold disabled:opacity-70"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-black hover:bg-neutral-800 disabled:bg-neutral-600 text-white font-bold px-7 py-3 text-xs rounded-full whitespace-nowrap transition-transform active:scale-95 inline-flex items-center gap-2 uppercase tracking-[0.032em] shrink-0"
        >
          {status === "loading" ? (
            <span>Sending...</span>
          ) : status === "success" ? (
            <span>Joined ✓</span>
          ) : (
            <>
              <span>Join Us</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#55db9c]"></span>
            </>
          )}
        </button>
      </form>
      {message && (
        <p
          className={`text-xs font-bold mt-2 px-3 py-1 rounded-md inline-block ${
            status === "success"
              ? "bg-[#55db9c] text-black border border-black"
              : "bg-[#fb4903]/20 text-[#fb4903] border border-[#fb4903]"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
