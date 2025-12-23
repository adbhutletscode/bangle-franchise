"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    budget: "",
    experience: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        city: "",
        budget: "",
        experience: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-maroon mb-2">
          Thank You for Your Enquiry!
        </h3>
        <p className="text-gray-700 mb-4">
          Our franchise team will contact you within 24 hours at the phone number
          you provided.
        </p>
        <p className="text-gray-600">
          In the meantime, feel free to explore our website or contact us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Mobile Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="+91 98765 43210"
          pattern="[0-9]{10,}"
        />
        <p className="text-sm text-gray-500 mt-1">
          We'll call you at this number to discuss the opportunity
        </p>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          City *
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Your city"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Investment Budget *
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select your budget range</option>
          <option value="50000-150000">
            ₹50,000 - ₹1,50,000 (Home-Based)
          </option>
          <option value="150000-300000">
            ₹1,50,000 - ₹3,00,000 (Counter)
          </option>
          <option value="300000-600000">
            ₹3,00,000 - ₹6,00,000 (Small Shop)
          </option>
          <option value="600000-1200000">
            ₹6,00,000 - ₹12,00,000 (Flagship)
          </option>
          <option value="open">Flexible / Discussing Options</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Business Experience (Optional)
        </label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select your experience level</option>
          <option value="no-experience">No prior business experience</option>
          <option value="some-experience">Some experience in retail</option>
          <option value="experienced">Extensive business experience</option>
          <option value="entrepreneur">Current entrepreneur</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Message (Optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input-field resize-none"
          rows={4}
          placeholder="Tell us about yourself and what interests you about this franchise..."
        ></textarea>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
        <p className="text-sm text-gray-700">
          <strong>Privacy Notice:</strong> Your information will only be used by
          our franchise team to contact you about this opportunity. We respect
          your privacy and will never share your details with third parties.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full font-bold text-lg"
      >
        {loading ? "Submitting..." : "Submit Franchise Enquiry"}
      </button>

      <p className="text-center text-gray-600 text-sm">
        By submitting, you agree to our{" "}
        <a href="/terms" className="text-maroon font-semibold hover:underline">
          Terms & Conditions
        </a>
        {" "}and{" "}
        <a href="/privacy" className="text-maroon font-semibold hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
