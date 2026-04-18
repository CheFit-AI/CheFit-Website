"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validation
      if (!email || !email.includes("@")) {
        throw new Error("Valid email is required");
      }

      // For MVP: Store in browser's localStorage (or integrate with external service)
      const existing = localStorage.getItem("waitlist") || "[]";
      const waitlist = JSON.parse(existing);

      if (waitlist.some((entry: any) => entry.email === email)) {
        throw new Error("Email already registered");
      }

      waitlist.push({
        email,
        phone: phone || undefined,
        timestamp: new Date().toISOString(),
      });

      localStorage.setItem("waitlist", JSON.stringify(waitlist));

      // TODO: Send to Airtable/external service
      // const response = await fetch("YOUR_AIRTABLE_API_ENDPOINT", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, phone }),
      // });

      // TODO: Send confirmation email
      // Send to your email service (Mailchimp, SendGrid, etc.)

      setSubmitted(true);
      setEmail("");
      setPhone("");

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-3xl mb-2">✓</div>
        <h3 className="font-semibold text-green-900 mb-1">You're on the waitlist!</h3>
        <p className="text-green-700">
          Check your email for a confirmation. We'll notify you when ChefLink launches in your city.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        We'll never spam you. Unsubscribe anytime.
      </p>
    </div>
  );
}
