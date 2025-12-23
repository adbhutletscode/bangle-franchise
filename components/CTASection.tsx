import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-maroon to-dark-maroon text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white mb-6">Ready to Start Your Journey?</h2>

        <p className="text-xl text-gray-100 mb-4 leading-relaxed">
          Join our network of successful franchise partners and build a profitable
          ethnic retail business. With our support, proven systems, and years of
          experience, your success is our priority.
        </p>

        <p className="text-lg text-gray-200 mb-10">
          Submit your enquiry today and let's discuss how we can help you achieve
          your entrepreneurial dreams!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/enquiry" className="btn-primary">
            Apply for Franchise
          </Link>
          <a href="https://wa.me/919876543210" className="btn-secondary">
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-yellow-700">
          <p className="text-gray-200 mb-6">Or connect with us directly:</p>
          <div className="space-y-2">
            <p className="text-lg">
              📞{" "}
              <a href="tel:+919876543210" className="text-gold font-bold">
                +91 98765 43210
              </a>
            </p>
            <p className="text-lg">
              ✉️{" "}
              <a href="mailto:franchise@bangles.in" className="text-gold font-bold">
                franchise@bangles.in
              </a>
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Monday - Saturday | 10:00 AM - 7:00 PM IST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
