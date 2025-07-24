import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  const linkStyle = "text-[#9CA3AF] font-normal text-base hover:text-[#FBAF42] transition";

  return (
    <footer className="bg-[#0F172A] border-t-4 border-[#334155] pb-10 w-full w-fullmax-w-screen">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 px-4 sm:px-10 w-full max-w-[1200px] mx-auto border-b-2 border-[#334155]">
        {/* Brand + Socials */}
        <div>
          <h1 className="text-[#19B7A5] font-semibold text-2xl mb-3">Tranon'AI</h1>
          <p className="text-[#9CA3AF] text-base leading-8 mb-5">
            Making every Malagasy home smarter, more efficient, and environmentally conscious.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Icon
                key={index}
                strokeWidth={1}
                className="text-white bg-[#1E293B] border border-[#475569] rounded-full p-2 w-10 h-10 hover:text-[#FBAF42] transition"
              />
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-bold text-lg mb-3">Products</h2>
          {["Smart Hub", "Mobile App", "Energy Monitor", "Accessories"].map((item, i) => (
            <a key={i} href="#" className={linkStyle}>
              {item}
            </a>
          ))}
        </div>

        {/* Support */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-bold text-lg mb-3">Support</h2>
          {["Installation Guide", "User Manual", "Troubleshooting", "Warranty"].map((item, i) => (
            <a key={i} href="#" className={linkStyle}>
              {item}
            </a>
          ))}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-bold text-lg mb-3">Company</h2>
          {["About Us", "Careers", "Partner Program", "Investor"].map((item, i) => (
            <a key={i} href="#" className={linkStyle}>
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 w-full max-w-[1200px] mx-auto mt-5 gap-4 text-center md:text-left">
        <p className="text-sm text-[#9CA3AF]">
          © 2025 Tranon'AI. All rights reserved. Made with ❤️ in Madagascar.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-[#9CA3AF]">
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
