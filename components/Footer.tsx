import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-maroon text-white pt-12 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold">
              Bangle Franchise
            </h3>
            <p className="text-gray-200">
              Premium franchise opportunity for entrepreneurial minds. Start your
              ethnic bangle business with our proven model.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/franchise-model" className="hover:text-gold">
                  Franchise Model
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-gold">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Contact</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="tel:+919876543210" className="hover:text-gold">
                  📞 +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:franchise@bangles.in" className="hover:text-gold">
                  ✉️ franchise@bangles.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  className="hover:text-gold"
                >
                  💬 WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Hours</h4>
            <p className="text-gray-200 text-sm">
              Monday - Saturday
              <br />
              10:00 AM - 7:00 PM IST
              <br />
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="border-t border-yellow-700 pt-8 text-center text-gray-300 text-sm">
          <div className="mb-4">
            <Link href="/disclaimer" className="hover:text-gold mr-6">
              Disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-gold mr-6">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms & Conditions
            </Link>
          </div>
          <p>
            &copy; 2025 Bangle Store Franchise. All rights reserved. | Empowering
            Entrepreneurs Since 2010
          </p>
          <p className="mt-2 text-xs">
            This is a franchise opportunity, not a guaranteed income scheme.
            Success depends on individual effort, market conditions, and
            operational excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
