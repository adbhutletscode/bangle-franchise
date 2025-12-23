import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - Bangle Franchise",
  description:
    "Get in touch with our franchise team via phone, email, or WhatsApp.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <div className="section-container max-w-4xl">
        <h1 className="mb-4 text-center">Get In Touch With Us</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Our franchise team is ready to answer all your questions and guide you
          through the opportunity.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="card">
            <h3 className="text-maroon mb-6">📞 Phone</h3>
            <p className="text-gray-600 mb-2">Call us during business hours:</p>
            <a href="tel:+919876543210" className="text-2xl font-bold text-maroon">
              +91 98765 43210
            </a>
            <p className="text-gray-600 mt-4">Monday - Saturday</p>
            <p className="text-gray-600">10:00 AM - 7:00 PM IST</p>
          </div>

          <div className="card">
            <h3 className="text-maroon mb-6">✉️ Email</h3>
            <p className="text-gray-600 mb-2">Send us your enquiry:</p>
            <a href="mailto:franchise@bangles.in" className="text-lg font-semibold text-maroon">
              franchise@bangles.in
            </a>
            <p className="text-gray-600 mt-4">
              We'll respond within 24 hours during business days.
            </p>
          </div>

          <div className="card">
            <h3 className="text-maroon mb-6">💬 WhatsApp</h3>
            <p className="text-gray-600 mb-2">Quick chat with our team:</p>
            <a
              href="https://wa.me/919876543210"
              className="text-lg font-semibold text-maroon hover:text-dark-maroon"
            >
              Click to chat on WhatsApp
            </a>
            <p className="text-gray-600 mt-4">
              Instant messaging for quick questions and enquiries.
            </p>
          </div>

          <div className="card">
            <h3 className="text-maroon mb-6">📍 Office Address</h3>
            <p className="text-gray-700 mb-2 font-semibold">
              Bangle Franchise HQ
            </p>
            <p className="text-gray-600">
              Crafts Building, Business Street
              <br />
              Mumbai, Maharashtra 400001
              <br />
              India
            </p>
          </div>
        </div>

        <div className="bg-maroon text-white rounded-lg p-8 mb-16">
          <h2 className="mb-4 text-white">Why We're Different</h2>
          <p className="mb-6">
            We believe in transparent, personalized communication. Your enquiry
            isn't just a lead to us—it's a potential partnership. Our franchise
            team will:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Provide honest information about the opportunity and challenges</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Share real numbers and success metrics from existing franchisees</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Understand your goals and recommend the best format for you</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Never pressure you into a decision—timing is your call</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Ensure you have all information to make an informed choice</span>
            </li>
          </ul>
        </div>

        <div className="bg-cream rounded-lg p-8 mb-12">
          <h2 className="mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-maroon mb-2">
                How soon can I get a response to my enquiry?
              </h3>
              <p className="text-gray-700">
                Our team aims to contact you within 24 hours of receiving your
                enquiry. For WhatsApp messages, we typically respond within 2-3
                hours during business hours.
              </p>
            </div>
            <div>
              <h3 className="text-maroon mb-2">
                Do I need prior business experience?
              </h3>
              <p className="text-gray-700">
                Not necessarily. While retail or business experience is
                advantageous, our comprehensive training program is designed for
                entrepreneurs from all backgrounds.
              </p>
            </div>
            <div>
              <h3 className="text-maroon mb-2">
                What's the typical timeline from enquiry to opening?
              </h3>
              <p className="text-gray-700">
                Most franchisees open their business within 3-6 months of
                signing the agreement, depending on location availability and
                setup complexity.
              </p>
            </div>
            <div>
              <h3 className="text-maroon mb-2">
                Is there a franchise fee?
              </h3>
              <p className="text-gray-700">
                Yes, there is a one-time franchise fee (varies by format) plus
                the investment for store setup and initial inventory. We'll share
                exact figures during our discussion.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-6">Ready to Learn More?</h2>
          <p className="text-gray-600 mb-8">
            Submit a formal enquiry and get comprehensive franchise details:
          </p>
          <Link href="/enquiry" className="btn-primary">
            Submit Franchise Enquiry
          </Link>
        </div>
      </div>
    </main>
  );
}
