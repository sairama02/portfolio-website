"use client";

import { useState } from "react";

export default function ContactForm({ variant = "portfolio" }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      e.target.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (variant === "dojo") {
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          background: "white",
          padding: "10px",
          borderRadius: "14px",
          border: "1px solid #d4d4d4",
          color: "black",
          fontSize: "12px"
        }}
      >

        <p style={{ fontSize: "18px", fontWeight: 500 }}>
          Reach Out!
        </p>

        {/* Name */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <label
            style={{
              width: "80px",
              fontWeight: 500
            }}
          >
            Name
          </label>
          <input
            name="name"
            placeholder="Please enter your name"
            required
            style={{
              flex: 1,
              background: "#f3f3f3",
              border: "1px solid #d4d4d4",
              borderRadius: "8px",
              padding: "8px 8px",
              height: "36px"
            }}
          />
        </div>

        {/* Email */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <label
            style={{
              width: "80px",
              fontWeight: 500
            }}
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Please enter your email address"
            required
            style={{
              flex: 1,
              background: "#f3f3f3",
              border: "1px solid #d4d4d4",
              borderRadius: "8px",
              padding: "8px 8px",
              height: "36px"
            }}
          />
        </div>

        {/* Message */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <label
            style={{
              width: "80px",
              fontWeight: 500,
              paddingTop: "6px"
            }}
          >
            Message
          </label>
          <textarea
            name="message"
            placeholder="Please type your message"
            required
            rows={3}
            style={{
              flex: 1,
              background: "#f3f3f3",
              border: "1px solid #d4d4d4",
              borderRadius: "8px",
              padding: "8px 8px",
              resize: "vertical"
            }}
          />
        </div>


        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            alignSelf: "center",
            background: "transparent",
            border: "1px solid #bdbdbd",
            padding: "6px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "14px"
          }}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>


        {status === "success" && (
          <p style={{ textAlign: "center" }}>
            Message sent!
          </p>
        )}

        {status === "error" && (
          <p style={{ color: "red", textAlign: "center" }}>
            {error}
          </p>
        )}

      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-4 rounded-xl border border-neutral-700 p-6"
    >
      <div className="space-y-1">
        <label className="text-sm text-neutral-300">Name</label>
        <input
          name="name"
          required
          className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:border-neutral-400"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-neutral-300">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:border-neutral-400"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-neutral-300">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:border-neutral-400"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md border border-neutral-600 px-4 py-2 text-sm text-white transition hover:border-neutral-400 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-neutral-300">Message sent</p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </div>
    </form>
  );
}