import Link from "next/link";
import WeatherStats from "./WeatherStats";
import BrandLogo from "./BrandLogo";
import { StarfishSticker, DiverMaskSticker } from "./SlushElements";

export default function Footer() {
  return (
    <footer className="bg-[#bfe5ff] text-[#000000] pt-20 font-sans relative overflow-hidden border-t border-black">
      {/* Animated sea bubbles drifting upward */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <span className="absolute left-[5%] bottom-10 w-4 h-4 rounded-full bg-white/40 border border-black/20 animate-float-slow"></span>
        <span className="absolute left-[30%] bottom-24 w-7 h-7 rounded-full bg-white/50 border border-black/20 animate-float-reverse"></span>
        <span className="absolute right-[12%] bottom-16 w-5 h-5 rounded-full bg-white/40 border border-black/20 animate-float-slow"></span>
        <span className="absolute right-[35%] bottom-8 w-6 h-6 rounded-full bg-white/60 border border-black/20 animate-float-reverse"></span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 pb-16">
        {/* Ocean Bulletin & Live Conditions - Slush White Card with Proper Gaps and Shadow */}
        <div className="bg-[#ffffff] rounded-[36px] border border-black p-8 md:p-12 mb-16 shadow-[6px_6px_0px_#000000] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 relative overflow-hidden">
          {/* Subtle floating sticker accent */}
          <div className="absolute -top-3 -right-3 hidden md:block rotate-12 animate-float-slow">
            <StarfishSticker label="LIVE OCEAN STATS" />
          </div>

          <div className="w-full lg:w-1/2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#55db9c] border border-black text-[#000000] text-[11px] font-bold tracking-[0.032em] uppercase mb-4 shadow-[2px_2px_0px_#000000]">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
              Seasonal Ocean Bulletin
            </div>
            <h3 className="text-3xl md:text-5xl font-lateral font-extrabold tracking-tight text-[#000000] mb-3 uppercase leading-[0.85]">
              Stay Connected With The Deep
            </h3>
            <p className="text-black/80 mb-6 text-sm md:text-base leading-relaxed font-medium">
              Get seasonal updates on <strong className="text-black font-bold">Netrani diving</strong> conditions, underwater visibility, seasonal coral blooms, and advance slot booking.
            </p>
            <form
              action="mailto:murudeshwar.scuba.dive@gmail.com?subject=Netrani%20Scuba%20Dive%20Inquiry%20/%20Join%20Us"
              method="get"
              className="flex w-full max-w-md items-center bg-[#ffffff] rounded-full border border-black p-1.5 shadow-[3px_3px_0px_#000000] focus-within:shadow-[1px_1px_0px_#000000] transition-all"
            >
              <input
                id="newsletter-email"
                type="email"
                name="body"
                placeholder="Enter your email"
                aria-label="Email Address for newsletter updates"
                required
                className="bg-transparent text-black px-4 py-2.5 outline-none w-full placeholder:text-black/50 text-xs font-bold"
              />
              <button
                type="submit"
                className="bg-black hover:bg-neutral-800 text-white font-bold px-7 py-3 text-xs rounded-full whitespace-nowrap transition-transform active:scale-95 inline-flex items-center gap-2 uppercase tracking-[0.032em] shrink-0"
              >
                <span>Join Us</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#55db9c]"></span>
              </button>
            </form>
          </div>

          {/* Conditions / Live Marine Stats Widget */}
          <WeatherStats />
        </div>

        {/* Directory Grid with Proper Gaps and Card Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-14">
          {/* Brand Info Card */}
          <div className="bg-white border border-black rounded-[28px] p-7 shadow-[4px_4px_0px_#000000] space-y-4 flex flex-col justify-between">
            <div>
              <BrandLogo size="md" />
              <p className="text-xs text-black/80 leading-relaxed font-medium mt-4">
                Experience guided <strong className="text-black font-bold">scuba diving at Netrani Island</strong> with certified instructors. From introductory <strong className="text-black font-bold">shallow coral reef dives</strong> to deep ocean excursions, <strong className="text-black font-bold">Netrani Scuba Dive</strong> provides safe, memorable underwater adventures.
              </p>
            </div>
            <div className="p-4 rounded-[20px] bg-[#d8efff] border border-black">
              <span className="block text-[11px] uppercase tracking-[0.032em] text-black font-bold mb-0.5">
                Official Diving Schedule
              </span>
              <p className="text-black text-xs font-bold">
                8:00 AM – 3:00 PM Daily (October to May Season).
              </p>
            </div>
          </div>

          {/* Helpful Links Card */}
          <div className="bg-white border border-black rounded-[28px] p-7 shadow-[4px_4px_0px_#000000]">
            <h4 className="text-xs font-bold text-black uppercase tracking-[0.032em] mb-4 pb-2 border-b border-black inline-block">
              Helpful Guides
            </h4>
            <ul className="space-y-2.5 text-xs text-black/85 font-medium">
              <li>
                <Link href="/contact" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Contact Booking Desk</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/how-to-reach-murudeshwar" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>How to Reach Murudeshwar</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Our Certified Instructors</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/netrani-island-guide" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>About Netrani Island</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/gandhada-gudi-netrani-scuba-diving-puneeth-rajkumar" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Gandhada Gudi &amp; Netrani</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Underwater Gallery</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/scuba-diving-age-limit" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Age &amp; Health Rules</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/best-time-scuba-diving-murudeshwar" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Best Diving Season</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/scuba-diving-timings" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Daily Boat Timings</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/scuba-diving-murudeshwar-non-swimmers" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Non-Swimmers Guide</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Privacy Policy</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Terms &amp; Booking Terms</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Dive Packages Card */}
          <div className="bg-white border border-black rounded-[28px] p-7 shadow-[4px_4px_0px_#000000]">
            <h4 className="text-xs font-bold text-black uppercase tracking-[0.032em] mb-4 pb-2 border-b border-black inline-block">
              Dive Packages
            </h4>
            <ul className="space-y-3 text-xs text-black/85 font-medium">
              <li>
                <Link href="/" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Home</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/netrani-scuba-diving" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span className="font-bold">Full Netrani Dive</span>
                  <span className="bg-[#ffd731] text-black px-2 py-0.5 rounded-full border border-black text-[10px] font-bold">₹3,500</span>
                </Link>
              </li>
              <li>
                <Link href="/intro-scuba-diving" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span className="font-bold">VIP Extended Dive</span>
                  <span className="bg-[#e9ccff] text-black px-2 py-0.5 rounded-full border border-black text-[10px] font-bold">₹4,500</span>
                </Link>
              </li>
              <li>
                <Link href="/bulk-scuba-booking" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Group &amp; Bulk Booking</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/scuba-diving-murudeshwar" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>Netrani Scuba Packages</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>All 2026 Blog Guides</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-black hover:underline transition-colors flex items-center justify-between">
                  <span>HD Media Gallery</span>
                  <span className="text-black/40">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Card */}
          <div className="bg-white border border-black rounded-[28px] p-7 shadow-[4px_4px_0px_#000000]">
            <h4 className="text-xs font-bold text-black uppercase tracking-[0.032em] mb-4 pb-2 border-b border-black inline-block">
              Direct Dive Desk
            </h4>
            <ul className="space-y-3.5 text-xs text-black/85 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ffffff] border border-black flex items-center justify-center text-black shrink-0 shadow-[2px_2px_0px_#000000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a href="tel:+917406329777" className="hover:underline font-bold text-black">
                  +91 74063 29777
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-black shrink-0 shadow-[2px_2px_0px_#000000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <a href="https://wa.me/917406329777" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-black">
                  WhatsApp: +91 74063 29777
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4da2ff] border border-black flex items-center justify-center text-black shrink-0 shadow-[2px_2px_0px_#000000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  </svg>
                </div>
                <a href="mailto:murudeshwar.scuba.dive@gmail.com" className="hover:underline truncate font-bold text-black">
                  murudeshwar.scuba.dive@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fb4903] border border-black flex items-center justify-center text-white shrink-0 mt-0.5 shadow-[2px_2px_0px_#000000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="text-black/80 font-medium leading-relaxed">
                  Temple Main Road, Murudeshwar Beach,
                  <br />
                  Karnataka, India 581350
                </span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/murudeshwar_scuba_dive/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#ffffff] border border-black flex items-center justify-center text-black hover:bg-[#e9ccff] transition-all shadow-[2px_2px_0px_#000000]"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <Link
                href="/how-to-reach-murudeshwar"
                className="text-xs font-bold text-black hover:underline transition-colors"
              >
                Get Directions →
              </Link>
            </div>
          </div>
        </div>

        {/* Explore Guides & Resources Pills Card */}
        <div className="bg-white border border-black rounded-[28px] p-8 shadow-[4px_4px_0px_#000000]">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-black">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.032em] text-black">
              Explore Guides &amp; Resources
            </h4>
            <Link
              href="/blog"
              className="text-xs font-bold text-black hover:underline transition-colors"
            >
              View All Guides →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5 text-xs">
            <Link
              href="/blog/scuba-diving-murudeshwar-netrani-island-guide"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#ffd731] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Complete 2026 Netrani Guide
            </Link>
            <Link
              href="/blog/gandhada-gudi-netrani-scuba-diving-puneeth-rajkumar"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#e9ccff] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Gandhada Gudi &amp; Puneeth Rajkumar
            </Link>
            <Link
              href="/blog/murudeshwar-scuba-diving-price-cost"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#55db9c] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Price &amp; Cost Guide (2026)
            </Link>
            <Link
              href="/blog/scuba-diving-murudeshwar-non-swimmers"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#ffd731] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Non-Swimmers Diving Guide
            </Link>
            <Link
              href="/blog/best-time-scuba-diving-murudeshwar"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#e9ccff] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Best Season &amp; Visibility
            </Link>
            <Link
              href="/blog/scuba-diving-timings"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#55db9c] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Boat Timings &amp; Schedule
            </Link>
            <Link
              href="/blog/scuba-diving-age-limit"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#ffd731] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Age Limit &amp; Medical Rules
            </Link>
            <Link
              href="/blog/netrani-island-guide"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#e9ccff] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Netrani Island Guide
            </Link>
            <Link
              href="/blog/murudeshwar-scuba-diving-from-bangalore"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#55db9c] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Bangalore to Murudeshwar Trip
            </Link>
            <Link
              href="/blog/beginner-scuba-diving-guide"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#ffd731] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              First-Time Diver Checklist
            </Link>
            <Link
              href="/blog/murudeshwar-scuba-diving-safety"
              className="px-4 py-2 rounded-full bg-[#d8efff] border border-black text-black hover:bg-[#55db9c] transition-all font-bold shadow-[2px_2px_0px_#000000]"
            >
              Safety Standards &amp; Equipment
            </Link>
          </div>
        </div>
      </div>

      {/* Slush Footer Bottom Bar: Full-bleed #000000 band with white text */}
      <div className="w-full bg-[#000000] text-[#ffffff] py-6 px-6 text-center border-t border-black relative z-10">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold tracking-[0.032em] uppercase">
          <p>
            © {new Date().getFullYear()} NETRANI SCUBA DIVE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[#ffffff]/80">
            NETRANI SCUBA DIVING &amp; MARINE ADVENTURES, MURUDESHWAR, KARNATAKA.
          </p>
        </div>
      </div>
    </footer>
  );
}
