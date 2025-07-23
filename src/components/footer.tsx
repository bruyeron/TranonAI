import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { LogoPartner } from './LogoPartner';

function Footer() {
  const linkStyle = "text-gray-600 font-normal text-base hover:text-[#FBAF42] transition";

  return (
    <footer className="pb-10 bg-gray-300 border-t-4 border-gray-500">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 px-4 sm:px-10 w-full max-w-[1200px] mx-auto border-b-2 border-[#566d8d]">
        {/* Brand + Socials */}
        <div>
          <h1 className="mb-3 text-2xl font-semibold text-black">Tranon'<span className="text-[#FBAF42]">AI</span></h1>
          <p className="mb-5 leading-8 text-gray-600 text-600 base">
            Making every Malagasy home smarter, more efficient, and environmentally conscious.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Icon
                key={index}
                strokeWidth={1}
                className="text-black bg-[#F2F4F8] border border-[#475569] rounded-full p-2 w-10 h-10 hover:text-[#FBAF42] transition"
              />
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-2">
          <h2 className="mb-3 text-lg font-bold text-black">Products</h2>
          {["Smart Hub", "Mobile App", "Energy Monitor", "Accessories"].map((item, i) => (
            <a key={i} href="#" className={linkStyle}>
              {item}
            </a>
          ))}
        </div>

        {/* Support */}
        <div className="flex flex-col gap-2">
          <h2 className="mb-3 text-lg font-bold text-black">Support</h2>
          {["Installation Guide", "User Manual", "Troubleshooting", "Warranty"].map((item, i) => (
            <a key={i} href="#" className={linkStyle}>
              {item}
            </a>
          ))}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <h2 className="mb-3 text-lg font-bold text-black">Company</h2>
          {["About Us", "Careers", "Partner Program", "Investor"].map((item, i) => (
            <a key={i} href="#" className={linkStyle}>
              {item}
            </a>
          ))}
        </div>
      </section>
      
      {/* Carousel Section */}
      <LogoPartner />
      
      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 w-full max-w-[1200px] mx-auto mt-5 gap-4 text-center md:text-left">
        <p className="text-sm text-gray-600">
          © 2025 Tranon'AI. All rights reserved. Made with ❤️ in Madagascar.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 md:justify-end">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
            <a key={i} href="#" className="hover:text-[#FBAF42] transition">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
