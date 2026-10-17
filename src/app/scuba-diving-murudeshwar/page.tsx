import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";
import "./scuba.css";
import pageData from "./scuba-diving-data.json";
import { InflatableRibbon, DiverMaskSticker, TankSticker, StarfishSticker } from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Netrani Scuba Diving Price ₹3,500 | Murudeshwar Booking",
  description:
    "Check Netrani scuba diving from Murudeshwar from ₹3,500. Compare inclusions, operator credentials, eligibility, booking steps and weather terms.",
  keywords: [
    "scuba diving in murudeshwar",
    "murudeshwar scuba diving price",
    "netrani island scuba diving",
    "pigeon island scuba diving",
    "scuba diving murudeshwar price",
    "netrani scuba diving cost",
    "scuba diving in murudeshwar price per person",
    "scuba diving in murudeshwar packages",
    "cost of scuba diving in murudeshwar",
    "scuba diving for non swimmers murudeshwar",
    "murudeshwar water sports",
    "padi scuba diving murudeshwar",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
  },
  openGraph: {
    title: "Netrani Scuba Diving Price ₹3,500 | Netrani Scuba Dive",
    description:
      "Check Netrani scuba diving from Murudeshwar from ₹3,500 with inclusion, operator, eligibility, booking and weather-policy checks.",
    url: "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar",
    siteName: "Netrani Scuba Dive",
    locale: "en_IN",
    images: [
      {
        url: "/images/netrani-diver.png",
        width: 1200,
        height: 630,
        alt: "Netrani Island scuba diving with Netrani Scuba Dive",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Scuba Diving Price ₹3,500 | Netrani Scuba Dive",
    description:
      "Netrani scuba from ₹3,500 with inclusion, operator, eligibility, booking and weather-policy checks.",
    images: ["/images/netrani-diver.png"],
  },
};

export default function ScubaDivingMurudeshwar() {
  const faqItems = pageData.faqItems;

  const schemas = [
    pageData.breadcrumbList,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#faq",
      "name": "Murudeshwar Scuba Diving (Netrani) FAQ",
      "url": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#faq",
      "mainEntityOfPage": {
        "@id": "https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#webpage",
      },
      "mainEntity": faqItems.map((faq, idx) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "@id": `https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#faq-a${idx + 1}`,
        },
        "@id": `https://www.murudeshwarscubadive.in/scuba-diving-murudeshwar#faq-q${idx + 1}`,
      })),
    },
    pageData.webPage,
    pageData.localBusiness,
    pageData.service,
    pageData.product,
    pageData.howTo,
  ];

  return (
    <main className="service-page netrani-theme">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(/</g, "\\u003c"),
        }}
      />
      <section className="service-hero service-hero--offset netrani-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <InflatableRibbon variant="wave" className="-top-12 -right-16 w-[420px] max-w-[50vw] opacity-85 animate-ribbon-wave" />
          <div className="absolute top-8 right-10 hidden xl:block rotate-6 animate-float-slow">
            <DiverMaskSticker label="NETRANI 12M" />
          </div>
          <div className="absolute bottom-6 right-24 hidden xl:block -rotate-6 animate-float-reverse">
            <TankSticker label="PADI CENTER" />
          </div>
        </div>
        <div className="service-container relative z-10">
          <div className="service-hero__inner">
            <nav className="service-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Netrani Scuba Diving</span>
            </nav>
            <div className="service-hero__badge">
              <i className="ri-shield-check-line" aria-hidden="true"></i>
              <span>Compare Credentials, Eligibility &amp; Inclusions</span>
            </div>
            <h1 className="service-hero__title">Scuba Diving in Murudeshwar from ₹3,500: Netrani Booking &amp; Slots</h1>
            <p className="service-hero__subtitle">
              <strong>Scuba diving in Murudeshwar</strong> at Netrani starts from{" "}
              <strong>about ₹3,500 per person</strong> in a current public beginner-plan example. Inclusions vary: do not
              assume the boat, food, equipment, dive, media or transfer is covered until it appears in your written quote.
              Use this page to compare a current slot, operator and eligibility requirements. For a detailed price
              comparison, jump to{" "}
              <Link href="/blog/scuba-diving-packages-murudeshwar">Murudeshwar scuba packages</Link>.
            </p>
            <div className="service-hero__actions">
              <a
                href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d--red"
              >
                <i className="ri-whatsapp-line" aria-hidden="true"></i> Check Price &amp; Slots
              </a>
              <a href="tel:+917829975777" className="btn-3d netrani-btn-blue">
                <i className="ri-phone-line" aria-hidden="true"></i> Call for Price
              </a>
            </div>
            <div className="service-hero__phone">
              <i className="ri-phone-fill" aria-hidden="true"></i>+91 78299 75777
            </div>
            <div className="netrani-trust-strip" aria-label="Netrani scuba booking trust points">
              <div className="netrani-trust-item">
                <strong>₹3,500+</strong>
                <span>beginner scuba slots</span>
              </div>
              <div className="netrani-trust-item">
                <strong>PADI</strong>
                <span>check the assigned centre listing</span>
              </div>
              <div className="netrani-trust-item">
                <strong>Water check</strong>
                <span>eligibility and skills come first</span>
              </div>
              <div className="netrani-trust-item">
                <strong>Media</strong>
                <span>confirm photos/videos in writing</span>
              </div>
              <div className="netrani-trust-item">
                <strong>Policy</strong>
                <span>weather/reschedule clarity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight">
        <div className="service-container">
          <div className="service-card netrani-banner">
            <div className="service-card__body">
              <div className="netrani-banner__row">
                <div className="netrani-icon" aria-hidden="true">
                  <i className="ri-ship-line"></i>
                </div>
                <div className="netrani-banner__text">
                  <h2>Netrani scuba diving price, slots, and 1-on-1 support</h2>
                  <p>
                    A current public operator example supports the “from ₹3,500” starting point. Before paying, confirm
                    the assigned operator, participant eligibility, instructor supervision, equipment, briefing, exact
                    inclusions and weather terms. A 1-on-1 instructor ratio is not universal and must appear in your
                    written confirmation if promised.
                  </p>
                </div>
                <a
                  href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d--red btn-3d--sm"
                >
                  Confirm Slots
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight netrani-soft" id="booking-proof">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <span className="section__subtitle">Booking proof</span>
              <h2 className="section__title netrani-h2">Confirm price, inclusions, operator and weather policy before paying</h2>
              <p className="section__description">
                The right Netrani scuba booking is not only a low poster price. Before you pay, confirm the inclusions,
                operator fit, media delivery, meeting point, and weather or reschedule rule in writing.
              </p>
              <p className="service-note">
                <strong>Source check (9 August 2026):</strong> the starting point is supported by a current public
                operator page showing ₹3,499 and ₹4,499 examples with different inclusions. PADI's official centre
                directory currently lists Scuba Spirit in Murudeshwar, but that does not validate every seller or
                guarantee which centre will fulfil a booking. Check the{" "}
                <a href="https://dolphindive.net/" target="_blank" rel="noopener noreferrer">
                  current operator example
                </a>{" "}
                and the{" "}
                <a href="https://www.padi.com/dive-center/india/scuba-spirit/" target="_blank" rel="noopener noreferrer">
                  PADI centre listing
                </a>
                , then verify your assigned operator in writing.
              </p>
              <div className="service-table-wrap">
                <table className="service-table" aria-label="Netrani scuba booking proof checklist">
                  <thead>
                    <tr>
                      <th>Proof point</th>
                      <th>What to confirm</th>
                      <th>Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageData.bookingProofChecklist.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.proofPoint}</td>
                        <td>{item.confirm}</td>
                        <td>{item.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="netrani-proof-grid" aria-label="Netrani scuba booking steps">
                {pageData.bookingSteps.map((step, idx) => (
                  <div key={idx} className="netrani-proof">
                    <i className="ri-checkbox-circle-line" aria-hidden="true"></i>
                    <strong>{step.step}</strong>
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>
              <div className="service-hero__actions">
                <a
                  href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d--red"
                >
                  <i className="ri-whatsapp-line" aria-hidden="true"></i> Confirm Inclusions
                </a>
                <a href="#testimonials" className="btn-3d netrani-btn-blue">
                  <i className="ri-chat-check-line" aria-hidden="true"></i> See Booking Scenarios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight netrani-visual-section">
        <div className="service-container">
          <header className="netrani-section-head">
            <span className="section__subtitle">Dive day preview</span>
            <h2 className="section__title">What happens before you go underwater</h2>
            <p className="section__description">
              A good first dive feels predictable. These visuals show the three moments that make the experience feel
              safer: briefing, surface support, and equipment clarity.
            </p>
          </header>
          <div className="netrani-thumbnail-grid" aria-label="Netrani scuba dive day preview">
            {pageData.diveDayPreviews.map((preview, idx) => (
              <figure key={idx} className="netrani-thumbnail-card">
                <img
                  alt={preview.alt}
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="netrani-thumbnail-card__img"
                  style={{ color: "transparent" }}
                  src={preview.img}
                />
                <figcaption className="netrani-thumbnail-card__body">
                  <strong>{preview.title}</strong>
                  <span>{preview.desc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight netrani-soft" id="why-book">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <div className="netrani-split">
                <div>
                  <span className="section__subtitle">Trusted booking help</span>
                  <h2 className="section__title netrani-h2">Why book Netrani scuba through Book Murudeshwar?</h2>
                  <p className="section__description">
                    We provide local booking support for travellers comparing scuba diving in Murudeshwar. Ask us to
                    identify the proposed operator and set out the price, inclusions, reporting time and weather terms
                    in writing. Pay only after those details and the cancellation policy are clear.
                  </p>
                  <div className="netrani-proof-grid" aria-label="Book Murudeshwar scuba proof">
                    {pageData.whyBookReasoning.map((item, idx) => (
                      <div key={idx} className="netrani-proof">
                        <i className={item.icon} aria-hidden="true"></i>
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="netrani-booking-flow" aria-label="Scuba booking flow">
                    {pageData.whyBookFlow.map((flowStep, idx) => (
                      <span key={idx}>{flowStep}</span>
                    ))}
                  </div>
                </div>
                <figure className="netrani-split__media netrani-split__figure">
                  <img
                    alt="Scuba gear and package clarity for Netrani Island booking"
                    loading="lazy"
                    width={1200}
                    height={675}
                    className="netrani-split__img"
                    style={{ color: "transparent" }}
                    src="/images/deep-dive.png"
                  />
                  <figcaption className="netrani-split__caption">
                    Clear equipment and package expectations make booking easier for first-time divers.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight" id="testimonials">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <span className="section__subtitle">Booking examples</span>
              <h2 className="section__title netrani-h2">Useful booking scenarios &amp; visual gallery</h2>
              <p className="section__description">
                These graphics are retained as <strong>editorial examples</strong> of useful booking conversations and actual scuba explorations around Netrani. Use them to see what to ask about price, eligibility, weather and media delivery; request independently verifiable recent reviews for the assigned operator if those matter to your decision.
              </p>
              <div className="netrani-testimonial-grid" aria-label="Illustrative scuba booking conversation scenarios">
                {pageData.bookingScenarios.map((scenario, idx) => (
                  <figure key={idx} className="netrani-testimonial-shot">
                    <img
                      alt={scenario.alt}
                      loading="lazy"
                      width={1080}
                      height={1620}
                      className="netrani-testimonial-shot__img"
                      style={{ color: "transparent" }}
                      src={scenario.img}
                    />
                    <figcaption>{scenario.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section service-section--tight">
        <div className="service-container">
          <section className="pricing-section" aria-label="Choose the Right Netrani Scuba Plan">
            <div className="pricing-section__header">
              <span className="pricing-section__eyebrow">Scuba Pricing</span>
              <h2 className="pricing-section__title">Choose the Right Netrani Scuba Plan</h2>
              <p className="pricing-section__description">
                If you only need a quick budget decision, use this before reading the longer price and package breakdown
                below.
              </p>
            </div>
            <div className="pricing-section__grid">
              {pageData.pricingPlans.map((plan, idx) => (
                <article key={idx} className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}>
                  <div className="pricing-card__top">
                    <span className="pricing-card__badge">{plan.badge}</span>
                    <h3 className="pricing-card__title">{plan.title}</h3>
                    <div className="pricing-card__price-wrap">
                      <p className="pricing-card__price">{plan.price}</p>
                      <p className="pricing-card__price-note">{plan.priceNote}</p>
                    </div>
                    <p className="pricing-card__description">{plan.desc}</p>
                  </div>
                  <ul className="pricing-card__features">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="pricing-card__feature">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-card__footer">
                    <a
                      href={plan.ctaLink}
                      className="pricing-card__cta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.ctaText}
                    </a>
                    {plan.ctaSubtext && <p className="pricing-card__cta-subtext">{plan.ctaSubtext}</p>}
                  </div>
                </article>
              ))}
            </div>
            <p className="pricing-section__note">
              Only the roughly ₹3,500 beginner starting point was matched to a current public operator example. Other
              retained bands are planning examples; confirm live rates, operator, eligibility and every inclusion.
            </p>
          </section>
        </div>
      </section>

      <section className="service-section service-section--tight netrani-soft">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <div className="netrani-split">
                <div>
                  <span className="section__subtitle">Quick answers</span>
                  <h2 className="section__title netrani-h2">Netrani scuba diving price, booking, timing, and day plan</h2>
                  <p className="section__description">
                    This page answers the main search questions first: Murudeshwar scuba diving price, what is included,
                    when to report, and how first-timers should book. For deeper package comparison, use the dedicated
                    packages guide.
                  </p>
                  <div className="netrani-facts" role="list" aria-label="Scuba diving quick facts">
                    {pageData.quickFacts.map((fact, idx) => (
                      <div key={idx} className="netrani-fact" role="listitem">
                        <strong>{fact.label}:</strong> {fact.value}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="netrani-split__media" aria-label="Netrani Island scuba diving photo">
                  <img
                    alt="Netrani Island scuba diving from Murudeshwar (beginner-friendly guided dive)"
                    width={1200}
                    height={675}
                    className="netrani-split__img"
                    style={{ color: "transparent" }}
                    src="/images/netrani-diver.png"
                  />
                </div>
              </div>
              <nav className="netrani-toc" aria-label="On this page">
                <span className="netrani-toc__label">On this page:</span>
                {pageData.tocLinks.map((link, idx) => (
                  <a key={idx} href={link.href}>{link.label}</a>
                ))}
              </nav>
              <p className="section__description">
                Need a deeper package comparison after checking the price range here? Read{" "}
                <Link href="/blog/scuba-diving-packages-murudeshwar">scuba package comparison</Link>. Need island
                travel basics? Read <Link href="/blog/netrani-island-guide">Netrani Island timings</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="guide">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Guide</span>
            <h2 className="section__title">Scuba diving in Murudeshwar: price, booking, and the Netrani trip</h2>
            <p className="section__description">
              This page is for travellers who want a source-checked answer before booking. It covers Murudeshwar scuba
              diving price, what is included, how the Netrani trip works, and what first-timers should confirm before
              paying.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                When people search for <strong>scuba diving in Murudeshwar</strong>, they are usually looking for Netrani
                Island. For most beginners, the typical <strong>Murudeshwar scuba diving price</strong> is{" "}
                <strong>₹3,500 to ₹4,500 per person</strong>, depending on inclusions. Netrani (also called Pigeon Island)
                is offshore, and your scuba day is built around a morning boat departure, training, and a guided dive
                session.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are comparing results for <strong>scuba diving Murudeshwar</strong>,{" "}
                <strong>Murudeshwar scuba diving</strong>, or <strong>Netrani Island scuba diving</strong>, focus on three
                things first: <strong>operator quality</strong>, <strong>inclusions</strong>, and{" "}
                <strong>season/sea conditions</strong>. A good scuba experience is not only about the lowest price. It is
                about a calm plan, clear communication, and responsible decision-making on the day.
              </p>
              <h3 className="section__title netrani-h2">What exactly is Discover Scuba Diving (DSD)?</h3>
              <p className="service-lede service-lede--flush">
                DSD is the most common tourist scuba program. Think of it as a supervised “first dive” experience. You do
                not need a previous certification. However, PADI says a participant should be reasonably comfortable in
                the water, complete a medical questionnaire and learn the required skills. The instructor briefs and
                supervises you; eligibility should be assessed rather than promised from a chat message alone.
              </p>
              <p className="service-lede service-lede--spaced">
                A Murudeshwar DSD quote may include the offshore boat trip, but this must be confirmed. The programme
                should start with briefing and skills in suitable conditions. Feeling comfortable can take different
                amounts of time; tell the instructor immediately if breathing, the mask, ears or water entry feels wrong.
              </p>
              <h3 className="section__title netrani-h2">Why Netrani Island is the main dive spot</h3>
              <p className="service-lede service-lede--flush">
                Murudeshwar is the base town, but the diving happens at Netrani Island. People choose Netrani because it is
                known for clearer water (in the right season), coral reefs, and a better chance of seeing marine life
                compared to many near-shore locations. Your actual view under water always depends on the day's
                visibility, and we did not find authoritative comparative data proving a “best” or “most popular” rank
                against every west-coast dive site.
              </p>
              <p className="service-lede service-lede--spaced">
                If you want a travel-planning view (boat timings, season notes, and how the island trip works), read{" "}
                <Link href="/blog/netrani-island-guide">Netrani Island timings and boat guide</Link>. If your
                focus is only the diving itself, the detailed dive-site guide is{" "}
                <Link href="/blog/scuba-diving-murudeshwar-netrani-island-guide">Netrani dive-site visibility guide</Link>.
              </p>
              <h3 className="section__title netrani-h2">What you will do on the day (simple walkthrough)</h3>
              <p className="service-lede service-lede--flush">
                A well-run scuba day is predictable. You report at the meeting point, complete a basic briefing, and then
                board the boat. On the boat, the team explains safety rules, shows you the equipment, and helps you with
                the right fit for mask and fins. Once you reach the dive area, you will do a short practice and then the
                guided dive.
              </p>
              <p className="service-lede service-lede--spaced">
                Calm breathing and following instructions matter, but they do not replace the programme's water-comfort,
                health and skills requirements. A responsible instructor should stop or postpone the dive if you cannot
                complete the required skills or conditions are unsuitable.
              </p>
              <h3 className="section__title netrani-h2">Underwater photos and videos: set expectations</h3>
              <p className="service-lede service-lede--flush">
                Photos and videos are one of the main reasons people book Netrani scuba. It is a special experience, and you
                want memories. However, this is also where expectations can mismatch. Some packages include a standard set
                of photos and a short video clip. Other packages include longer coverage or better angles. Quality also
                depends on water clarity and sunlight on that day.
              </p>
              <p className="service-lede service-lede--spaced">
                When you book, confirm these points: how many photos you receive, whether there is a separate photographer
                or shared coverage, and how delivery works (same day or later). If your priority is media, choose a
                package designed for that goal. It is the simplest way to avoid disappointment.
              </p>
              <h3 className="section__title netrani-h2">How to compare Murudeshwar scuba diving packages (without confusion)</h3>
              <p className="service-lede service-lede--flush">
                The keyword “packages” is popular because people want a single number. But packages are not equal unless
                inclusions are equal. Two listings can show the same price while delivering a very different experience.
                Use a comparison checklist:
              </p>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                <li>
                  <strong className="text-white">Boat transfer:</strong> Confirm it is included and whether timings
                  depend on sea conditions.
                </li>
                <li>
                  <strong className="text-white">Instructor support:</strong> Beginners should have close supervision.
                  Ask how the team manages first-timers.
                </li>
                <li>
                  <strong className="text-white">Dive time:</strong> Underwater time varies by conditions and your
                  comfort. Avoid rigid promises and focus on “guided, safe dive”.
                </li>
                <li>
                  <strong className="text-white">Photos/videos:</strong> Confirm deliverables and delivery method.
                </li>
                <li>
                  <strong className="text-white">Reporting time:</strong> Early morning reporting is common. Plan
                  your stay and taxi accordingly.
                </li>
                <li>
                  <strong className="text-white">Safety:</strong> Ask about equipment checks and emergency readiness.
                </li>
              </ul>
              <p className="service-lede service-lede--spaced">
                For a detailed packages breakdown, read{" "}
                <Link href="/blog/scuba-diving-packages-murudeshwar">Netrani scuba package comparison</Link>. If you are
                planning a full trip, our bundle guide is{" "}
                <Link href="/contact">stay + taxi + scuba complete package</Link>
                .
              </p>
              <h3 className="section__title netrani-h2">What you will see under water (realistic expectations)</h3>
              <p className="service-lede service-lede--flush">
                Most first-timers expect a “movie scene” instantly. In reality, your underwater view depends on visibility
                and sunlight on the day. On a good day at Netrani, you can see coral patches, small reef fish, and larger
                schools passing through. On an average day, you still get a beautiful experience, but the visibility can
                be lower and colours look softer.
              </p>
              <p className="service-lede service-lede--spaced">
                For beginners, the goal is not to chase rare sightings. The goal is to enjoy the feeling of weightlessness,
                the calm breathing rhythm, and a safe guided exploration. If you treat the first dive as a foundation, you
                enjoy it more. And if you later decide to do a certification course, your first experience will give you a
                better idea of what scuba is actually like.
              </p>
              <h3 className="section__title netrani-h2">How scuba equipment works (simple explanation for beginners)</h3>
              <p className="service-lede service-lede--flush">
                Many travellers feel nervous because the equipment looks technical. The good news is: you do not need to
                memorise anything. You only need to understand what each part does, so you feel confident when the
                instructor explains it.
              </p>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                <li>
                  <strong className="text-white">Mask:</strong> Helps you see clearly under water. If water enters, the
                  instructor teaches a simple clearing technique.
                </li>
                <li>
                  <strong className="text-white">Regulator:</strong> The mouthpiece you breathe through. You breathe
                  normally, just a bit slower.
                </li>
                <li>
                  <strong className="text-white">BCD (buoyancy control device):</strong> Helps you float on the surface
                  and maintain comfort under water.
                </li>
                <li>
                  <strong className="text-white">Tank:</strong> Holds compressed air. The team must monitor pressure
                  and time, and you must follow the briefing and signal any problem immediately.
                </li>
                <li>
                  <strong className="text-white">Fins:</strong> Help you move with less effort. For beginners, slow
                  fin kicks are enough.
                </li>
                <li>
                  <strong className="text-white">Wetsuit (seasonal):</strong> Helps with comfort and reduces heat loss
                  in water.
                </li>
              </ul>
              <p className="service-lede service-lede--spaced">
                If you are worried about breathing, remember this: the instructor controls the pace. The first few minutes
                are only about getting comfortable. Once you settle, scuba becomes surprisingly calming because your focus
                goes to breath and movement.
              </p>
              <h3 className="section__title netrani-h2">Safety signals and what instructors look for</h3>
              <p className="service-lede service-lede--flush">
                Before your dive, you learn a few simple hand signals. You do not need a long list. For a first dive, these
                are the important ones: “OK”, “not OK”, “up”, “down”, and “ear problem”. Instructors also watch your
                breathing rhythm and comfort level. If you are tense, they slow down. If you are comfortable, they
                continue.
              </p>
              <p className="service-lede service-lede--spaced">
                The biggest beginner issue is ear pressure. That is normal. You will be guided to equalise (release ear
                pressure) slowly. A responsible operator never forces depth. The descent should stop if you cannot
                equalise or feel pain; do not push through it.
              </p>
              <h3 className="section__title netrani-h2">Who should not scuba dive (common restrictions)</h3>
              <p className="service-lede service-lede--flush">
                Scuba is an adventure activity with medical and environmental risks. Complete the operator's recognised
                medical questionnaire honestly. Depending on your answers—including conditions, symptoms, pregnancy,
                surgery or medication—you may need written clearance from a physician familiar with diving medicine. A
                cold, congestion or ear problem can also make participation unsuitable.
              </p>
              <p className="service-lede service-lede--spaced">
                This page is not medical advice, and booking support cannot declare you fit to dive. Be transparent with
                the dive professional and consult an appropriately qualified doctor when the questionnaire or your health
                history requires it.
              </p>
              <h3 className="section__title netrani-h2">Scuba and flights: how to plan if you are travelling</h3>
              <p className="service-lede service-lede--flush">
                Do not fly immediately after scuba diving. PADI's published guidance cites at least 12 hours after a single
                no-decompression dive, at least 18 hours after multiple dives or multiple diving days, and longer when
                your dive computer or dive professional requires it. Many travellers choose a 24-hour buffer. Confirm the
                rule that applies to your actual dive profile before finalising a flight.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are doing a longer coastal trip with multiple destinations, a weekend plan with a buffer day is
                more comfortable than a tight one-day plan. If you are visiting from Bangalore, this is another reason a
                weekend itinerary works better.
              </p>
              <h3 className="section__title netrani-h2">What if weather cancels the trip?</h3>
              <p className="service-lede service-lede--flush">
                Weather and sea conditions are part of coastal activities. A cancellation can feel disappointing, but it is
                also a sign that the operator is not taking unnecessary risks. If conditions are not safe, the right choice
                is to reschedule or switch to an alternative plan in Murudeshwar for that day.
              </p>
              <p className="service-lede service-lede--spaced">
                If scuba is your main reason for travel, choose a commonly workable season and keep a buffer day if
                possible. For a fuller planning view, the cluster guide{" "}
                <Link href="/blog/scuba-diving-murudeshwar-netrani-island-guide">Netrani dive-site guide</Link> covers
                season advice and backup planning in more detail.
              </p>
              <h3 className="section__title netrani-h2">Go straight to the answer you need</h3>
              <p className="service-lede service-lede--flush">
                If you came here to confirm price: go to the <a href="#prices">price section</a> and message us for
                today’s inclusions. If you came here to check safety for non-swimmers: go to the{" "}
                <a href="#non-swimmers">non-swimmers section</a> and read the detailed guide. If you came here to plan a
                weekend: go to the <a href="#itinerary">trip plan section</a> and choose the right stay location.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are ready to book, use the <a href="#book">booking CTA</a>. We confirm slots, share the meeting
                point, and guide you with a clear plan for your scuba day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="how-it-works">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">How it works</span>
            <h2 className="section__title">How scuba diving in Murudeshwar works (from booking to dive)</h2>
            <p className="section__description">
              If you are booking scuba for the first time, the process can feel unclear. This section explains the full
              flow in plain Indian English, so you know what happens at each stage.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <h3 className="section__title netrani-h2">Step 1: Confirm availability and reporting time</h3>
              <p className="service-lede service-lede--flush">
                Scuba at Netrani Island is not like a “walk-in ticket”. The boat has limited capacity, and the sea
                conditions decide whether the trip runs at full strength. When you message to book, ask for your date,
                group size, assigned operator and reporting time in writing. Anyone who does not swim confidently and
                every child should be assessed against the operator's health, water-comfort, skills and age rules—not
                automatically placed into a “suitable” plan.
              </p>
              <h3 className="section__title netrani-h2">Step 2: Reach the meeting point and complete briefing</h3>
              <p className="service-lede service-lede--flush">
                On the day, report to the exact point named by the assigned operator; no single universal Murudeshwar
                meeting point was verified. The team should explain the boat procedure, equipment, required skills and
                dive plan. Ask questions before boarding and again before entering the water.
              </p>
              <h3 className="section__title netrani-h2">Step 3: Boat ride to Netrani Island</h3>
              <p className="service-lede service-lede--flush">
                The boat ride is part of the experience. It is also where you should protect yourself from sun and salt
                spray. Carry a cap, sunscreen, and water. If you get motion sickness, inform the team early. Simple
                preparation can make the ride comfortable.
              </p>
              <h3 className="section__title netrani-h2">Step 4: Training and comfort checks</h3>
              <p className="service-lede service-lede--flush">
                For beginners, training is practical. You learn how to breathe through the regulator, how to clear the
                mask, and how to communicate with the instructor. The goal is not to “pass a test”. The goal is to feel
                comfortable. Once you are comfortable at the surface, the underwater part becomes easier.
              </p>
              <h3 className="section__title netrani-h2">Step 5: The guided dive</h3>
              <p className="service-lede service-lede--flush">
                The guided dive is the highlight. Your instructor stays with you and manages the pace. If you feel any
                discomfort, you signal and the team responds. You are not expected to be perfect. You are expected to
                be honest about comfort so the dive stays safe.
              </p>
              <h3 className="section__title netrani-h2">Step 6: Return and media delivery</h3>
              <p className="service-lede service-lede--flush">
                After the dive, you return to Murudeshwar. Photos and videos may be shared the same day or later, depending
                on the package and operator workflow. If media is important to you, confirm delivery method before you
                book. A clear expectation protects your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="prices">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Price</span>
            <h2 className="section__title">Murudeshwar scuba diving price (per person) and what it includes</h2>
            <p className="section__description">
              Most searches end at the same question: “What is the <strong>scuba diving price in Murudeshwar</strong>
              ?” Below is a practical breakdown of the common <strong>Netrani Island scuba diving price</strong> range
              and the inclusions you must confirm.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                For beginners, the most popular option is <strong>Discover Scuba Diving (DSD)</strong>. This is a guided
                experience, not a certification course. You get training and a supervised dive with an instructor.
              </p>
              <p className="service-lede service-lede--spaced">
                Quick answer: most people pay <strong>₹3,500 to ₹4,500 per person</strong> for beginner scuba diving in
                Murudeshwar. On this page, we explain price the way a traveller can actually use it: per person, what is
                included, and what changes the final cost.
              </p>
              <div className="service-table-wrap">
                <table className="service-table" aria-label="Scuba diving price per person in Murudeshwar">
                  <thead>
                    <tr>
                      <th scope="col">Package type</th>
                      <th scope="col">Typical price (per person)</th>
                      <th scope="col">Best for</th>
                      <th scope="col">Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>DSD (Beginner)</strong>
                      </td>
                      <td>₹3,500 to ₹4,500</td>
                      <td>Eligible first-timers after health, water-comfort and skills checks</td>
                      <td>Confirm boat + training + equipment + guided dive + media; plans vary</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Premium / Add-ons</strong>
                      </td>
                      <td>Varies by inclusion</td>
                      <td>Travellers comparing media or group-size add-ons</td>
                      <td>May offer extra media or smaller groups; require a written deliverable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="section__title netrani-h2">Why prices vary</h3>
              <p className="service-lede service-lede--flush">
                When you compare “Murudeshwar scuba diving price” online, you will see a wide range. It is not always
                the same activity. The biggest difference is usually the package inclusions. Some plans include a standard
                set of underwater photos/videos, while others include a dedicated photographer or extended coverage.
                Season and sea conditions also affect scheduling and capacity.
              </p>
              <p className="service-lede service-lede--spaced">
                If you want the best value, decide the result you want: a safe first dive, clear photos, or an all-in
                trip bundle (stay + taxi + scuba). Then book the correct package rather than chasing the lowest number
                on a poster.
              </p>
              <div className="service-stack text-center">
                <a
                  href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d--red service-btn-center"
                >
                  Ask for today’s scuba price and inclusions
                </a>
                <p className="service-note mt-2">
                  Prefer a call?{" "}
                  <a href="tel:+917829975777" className="external-link">
                    +91 78299 75777
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="cost-breakdown">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Cost</span>
            <h2 className="section__title">Cost of scuba diving in Murudeshwar: a transparent breakdown</h2>
            <p className="section__description">
              If you are comparing prices across websites, you may wonder why the same activity shows different numbers.
              This section explains what you are actually paying for, and how to spot genuine value.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                The cost of scuba diving in Murudeshwar is not only the “dive” itself. Netrani is offshore, so you are
                paying for a full operational setup: the boat, crew, instructors, equipment, and safety readiness. A
                higher price does not prove good maintenance or safer practice, so verify the operator, equipment
                checks, supervision and emergency plan separately from price.
              </p>
              <h3 className="section__title netrani-h2">What your payment typically covers</h3>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                <li>
                  <strong className="text-white">Boat operations:</strong> Boat crew, fuel, and timing coordination.
                </li>
                <li>
                  <strong className="text-white">Instructor team:</strong> Certified staff for briefing, training, and
                  guided diving.
                </li>
                <li>
                  <strong className="text-white">Scuba equipment:</strong> Mask, fins, BCD, regulator, and tank usage
                  for the activity.
                </li>
                <li>
                  <strong className="text-white">Safety readiness:</strong> Procedures, checks, and emergency
                  preparedness on the boat.
                </li>
                <li>
                  <strong className="text-white">Media:</strong> Underwater photos/videos (package dependent).
                </li>
              </ul>
              <h3 className="section__title netrani-h2">Common “hidden cost” confusion (how to avoid it)</h3>
              <p className="service-lede service-lede--flush">
                The simplest way to avoid confusion is to confirm inclusions in one line before you pay anything. Ask
                for a message that clearly states: boat included, guided dive included, and media included (if
                promised). If something is important to you, do not assume it is included. Confirm it.
              </p>
              <p className="service-lede service-lede--spaced">
                For a detailed package comparison, the best cluster guide is{" "}
                <Link href="/blog/scuba-diving-packages-murudeshwar">scuba package comparison</Link>. If you want the
                best value for a full trip, choose a bundle plan via{" "}
                <Link href="/contact">
                  complete package (stay + taxi + scuba)
                </Link>
                .
              </p>
              <h3 className="section__title netrani-h2">Practical advice for best value</h3>
              <p className="service-lede service-lede--flush">
                If your goal is “best value”, decide the outcome you want. For most first-timers, the best value is a
                standard DSD with clear inclusions and a calm operator. For content-focused travellers, the best value is
                a photo/video-oriented plan. For families and groups, the best value is often a bundle that reduces
                morning stress and travel uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Why Netrani</span>
            <h2 className="section__title">Clear water, coral reefs, real diving</h2>
            <p className="section__description">
              Netrani Island (Pigeon Island) is about 10 nautical miles off Murudeshwar. It is known as an offshore
              diving area, but visibility and marine-life sightings vary by day and no species can be guaranteed.
              Landing on the island is prohibited.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                New to the island? Read our{" "}
                <Link href="/blog/netrani-island-guide">Netrani Island timings guide</Link> for boat timings,
                season tips, and travel planning.
              </p>
              <p className="service-lede service-lede--spaced">
                Want a beginner-first explanation? Read{" "}
                <Link href="/blog/scuba-diving-murudeshwar-non-swimmers">non-swimmer scuba guide</Link>. Planning
                your stay? See{" "}
                <Link href="/contact">
                  where to stay for early scuba reporting
                </Link>
                .
              </p>
              <div className="service-stats">
                {pageData.whyNetraniStats.map((stat, idx) => (
                  <div key={idx} className="service-stat netrani-stat">
                    <span className="service-stat__value">{stat.value}</span>
                    <span className="service-stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="package">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Package</span>
            <h2 className="section__title">Discover Scuba Diving (DSD)</h2>
            <p className="section__description">
              A first-experience option for eligible beginners. Allow much of the day and use the assigned operator's
              written reporting and return schedule.
            </p>
          </header>
          <div className="service-card">
            <div className="service-price-card__head service-price-card__head--split netrani-cta">
              <div>
                <h3>Beginner-friendly scuba + boat ride</h3>
                <p>Confirm boat, training, equipment, instructor support and photos/videos</p>
              </div>
              <div className="service-price-card__price">
                <small>Starting at</small>
                <div className="service-price-card__amount">₹3,500</div>
              </div>
            </div>
            <div className="service-card__body">
              <ul className="service-feature-list">
                {pageData.dsdPackageFeatures.map((feature, idx) => (
                  <li key={idx} className="service-feature netrani-feature">
                    <i className={feature.icon} aria-hidden="true"></i>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="service-stack text-center mt-6">
                <a href="tel:+917829975777" className="btn-3d netrani-btn-blue service-btn-center">
                  Check Slot, Operator &amp; Payment Terms
                </a>
                <p className="service-note mt-2">
                  Prefer WhatsApp?{" "}
                  <a
                    href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Chat to confirm slots and inclusions
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="packages">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Packages</span>
            <h2 className="section__title">Scuba diving in Murudeshwar packages: how to choose the right one</h2>
            <p className="section__description">
              “Packages” can sound confusing because every operator lists a slightly different set of inclusions. Use
              this section as a practical checklist so you choose the right plan for your budget and expectations.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <h3 className="section__title netrani-h2">1) Standard beginner package (most common)</h3>
              <p className="service-lede service-lede--flush">
                This is the best fit for most travellers searching “<strong>scuba diving in Murudeshwar price per person</strong>
                ” because it keeps the comparison simple. Ask whether the specific quote includes the boat, basic
                training, equipment, guided dive and underwater photos/videos. A “standard” label does not make those
                inclusions universal.
              </p>
              <h3 className="section__title netrani-h2">2) Photo/video focused package (for better memories)</h3>
              <p className="service-lede service-lede--flush">
                If your main goal is good content, ask for a package with clear deliverables: number of photos, length of
                video, delivery timeline, and whether the photographer is shared across a group. This avoids
                disappointment where the activity is excellent but the media is limited.
              </p>
              <h3 className="section__title netrani-h2">3) Trip bundle (stay + taxi + scuba)</h3>
              <p className="service-lede service-lede--flush">
                For families and groups, logistics matter. If your hotel is far from the harbour, you may end up stressed
                about early morning reporting. In that case, a bundle is easier: choose a stay close to the pickup area
                and arrange a taxi at the correct time. See{" "}
                <Link href="/contact">Murudeshwar complete package</Link> for
                the all-in approach.
              </p>
              <p className="service-lede service-lede--spaced">
                Detailed package comparisons are covered in our guide:{" "}
                <Link href="/blog/scuba-diving-packages-murudeshwar">Murudeshwar scuba diving packages</Link>. If you
                want a quick recommendation for your date and group size, message us on WhatsApp and we will shortlist
                the right option.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="compare-booking">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Compare</span>
            <h2 className="section__title">
              Best value scuba diving in Murudeshwar: direct center vs local booking support
            </h2>
            <p className="section__description">
              The lowest visible price is not always the best choice. Compare the booking route, proof, inclusions, and
              support before you confirm a Netrani slot.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <div className="service-table-wrap">
                <table className="service-table" aria-label="Compare scuba booking options in Murudeshwar">
                  <thead>
                    <tr>
                      <th scope="col">Booking route</th>
                      <th scope="col">Best for</th>
                      <th scope="col">What to verify</th>
                      <th scope="col">Risk if unclear</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageData.bookingComparison.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <strong>{item.route}</strong>
                        </td>
                        <td>{item.bestFor}</td>
                        <td>{item.verify}</td>
                        <td>{item.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="service-lede service-lede--spaced">
                Our recommendation is simple: choose the route that gives you the clearest written inclusions. If you want
                a fast decision, message us with your date, group size, and comfort level. We will guide you to the
                best-fit Netrani scuba option for that day.
              </p>
              <div className="service-stack text-center mt-6">
                <a
                  href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d btn-3d--red service-btn-center"
                >
                  Compare Today's Netrani Scuba Options
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="schedule">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Schedule</span>
            <h2 className="section__title">Day plan (typical)</h2>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <ol className="service-ol">
                {pageData.scheduleSteps.map((step, idx) => (
                  <li key={idx}>
                    <strong>{step.title}</strong> {step.text}
                  </li>
                ))}
              </ol>
              <p className="service-note">
                The sequence is useful, but no universal reporting time, boat duration or return time was independently
                verified. Do not book a tight train, bus or flight connection around an estimated sea-trip schedule.
              </p>
              <p className="service-lede service-lede--spaced">
                For seasons, conditions, and tips, read our{" "}
                <Link href="/blog/scuba-diving-murudeshwar-netrani-island-guide">Netrani dive-site conditions guide</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="non-swimmers">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Beginners</span>
            <h2 className="section__title">Scuba diving for non-swimmers in Murudeshwar: what it really means</h2>
            <p className="section__description">
              This is one of the most common concerns. The accurate short answer is: DSD may be possible for a person
              who does not swim confidently, but only after the operator checks water comfort, health, required skills
              and conditions. Instructor support does not remove participant requirements or risk.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <div className="netrani-split">
                <div>
                  <p className="service-lede service-lede--flush">
                    “Non-swimmer friendly” should never mean automatic eligibility. PADI says DSD participants should
                    be comfortable in the water and able to maintain themselves at the surface. The assigned professional
                    must also complete the medical, briefing and skills process. If those checks or the sea conditions are
                    unsuitable, the activity should be changed, postponed or stopped.
                  </p>
                  <p className="service-lede service-lede--spaced">
                    If you want a detailed walkthrough of what happens from the moment you reach the harbour until you
                    get back, read <Link href="/blog/scuba-diving-murudeshwar-non-swimmers">non-swimmer scuba guide</Link>
                    . It covers the practical questions people ask: fear of water, breathing, masks, and what to do if
                    you feel anxious.
                  </p>
                </div>
                <figure className="netrani-split__media netrani-split__figure">
                  <img
                    alt="Beginner diver with close instructor support at Netrani Island"
                    loading="lazy"
                    width={1200}
                    height={675}
                    className="netrani-split__img"
                    style={{ color: "transparent" }}
                    src="/images/blog/snorkelling-fish-netrani.jpg"
                  />
                  <figcaption className="netrani-split__caption">
                    Instructor support follows—not replaces—health, water-comfort and skills checks.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="safety">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Safety</span>
            <h2 className="section__title">Eligibility and safety checklist</h2>
            <p className="section__description">
              Netrani Island scuba diving is designed for beginners, but it is still an adventure activity. Use this
              as a quick self-check before you book.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <ul className="service-feature-list">
                {pageData.safetyChecklist.map((item, idx) => (
                  <li key={idx} className="service-feature netrani-feature">
                    <i className={item.icon} aria-hidden="true"></i>
                    <span>
                      <strong>{item.title}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="service-note mt-4">
                Want the full beginner explanation? Read{" "}
                <Link href="/blog/scuba-diving-murudeshwar-non-swimmers">non-swimmer scuba safety guide</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="operator">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Quality</span>
            <h2 className="section__title">How to choose a reliable scuba operator in Murudeshwar</h2>
            <p className="section__description">
              Many listings look similar online. This checklist helps you pick an operator that prioritises safety,
              clarity, and a good first-time experience.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                If you are price-shopping, it is easy to miss the most important part: operator quality. A reliable
                operator is not only about certification logos. It is about how the team communicates, how they manage
                beginners, and whether they make sensible decisions when sea conditions change.
              </p>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                {pageData.operatorChecklist.map((item, idx) => (
                  <li key={idx}>
                    <strong className="text-white">{item.title}</strong> {item.desc}
                  </li>
                ))}
              </ul>
              <p className="service-lede service-lede--spaced">
                Use these basics to question any operator proposed for your group. We can help compare options, but you
                should ask for the assigned centre name, instructor credentials, emergency readiness and written terms
                rather than relying on a general “verified partner” statement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="best-time">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Season</span>
            <h2 className="section__title">Best time for scuba diving in Murudeshwar (Netrani Island)</h2>
            <p className="section__description">
              Visibility and sea conditions matter more than temperature. Outside-monsoon months are commonly used as the
              planning window, but no month guarantees clear water or a departure.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                Use <strong>October to May</strong> as a broad planning range only. Karnataka Tourism notes that
                monsoon access may be restricted, while each operator and captain makes the actual safety decision. Ask
                for current status close to the date and keep a land-based backup plan.
              </p>
              <p className="service-lede service-lede--spaced">
                For a month-wise trip plan, read{" "}
                <Link href="/blog/best-time-scuba-diving-murudeshwar">Murudeshwar season and weather guide</Link>. It helps
                you plan your stay, temple visit, and scuba day without rushing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="what-to-carry">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Checklist</span>
            <h2 className="section__title">What to carry for your scuba day (simple packing list)</h2>
            <p className="section__description">
              Your scuba experience becomes smoother when you bring the right basics. This list is designed for Indian
              travellers doing a one-day trip from Murudeshwar.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <div className="service-grid">
                <div className="service-card">
                  <div className="service-card__body">
                    <h3 className="section__title netrani-h2">Carry</h3>
                    <ul className="service-feature-list">
                      {pageData.packingList.carry.map((item, idx) => (
                        <li key={idx} className="service-feature netrani-feature">
                          <i className={item.icon} aria-hidden="true"></i>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-card__body">
                    <h3 className="section__title netrani-h2">Avoid</h3>
                    <ul className="service-feature-list">
                      {pageData.packingList.avoid.map((item, idx) => (
                        <li key={idx} className="service-feature netrani-feature">
                          <i className={item.icon} aria-hidden="true"></i>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <p className="service-note mt-4">
                If you are combining scuba with other water activities, see{" "}
                <Link href="/blog/water-sports-murudeshwar">Murudeshwar water sports and activities</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="meeting-point">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Location</span>
            <h2 className="section__title">Meeting point in Murudeshwar</h2>
            <p className="section__description">
              The meeting point depends on the assigned operator and departure arrangement. Get the exact map pin,
              landmark, contact person and reporting time in the same written confirmation; do not travel only to a
              generic “harbour” pin.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                Staying outside Murudeshwar? Use our <Link href="/contact">Murudeshwar taxi service</Link> for
                the confirmed early-morning meeting point,{" "}
                <Link href="/contact">Mangalore Airport to Murudeshwar taxi</Link> for
                flight arrivals, or check{" "}
                <Link href="/contact">where to stay for scuba diving</Link> to
                reduce travel time.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are planning a full trip, see{" "}
                <Link href="/contact">
                  Murudeshwar complete package (stay + taxi + scuba)
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="stay">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Stay</span>
            <h2 className="section__title">Where to stay for scuba diving in Murudeshwar</h2>
            <p className="section__description">
              If you are coming mainly for scuba, choose your hotel based on morning reporting convenience first, and views
              second. A good location helps you start early without stress.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <p className="service-lede service-lede--flush">
                Many people search for “scuba diving in Murudeshwar packages” and forget that the most common trip
                problem is logistics: late reporting, long travel time, and confusion about pickup. A stay that is
                aligned with your scuba timing makes the day smoother.
              </p>
              <p className="service-lede service-lede--spaced">
                Use this guide to choose the right area and style of accommodation:{" "}
                <Link href="/contact">
                  where to stay for early scuba reporting
                </Link>
                . If you want an all-in approach, see{" "}
                <Link href="/contact">Murudeshwar complete package</Link>.
              </p>
              <p className="service-note mt-2">
                Looking for stays now? Browse <Link href="/contact">Murudeshwar accommodations</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="itinerary">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Trip plan</span>
            <h2 className="section__title">How to plan your Murudeshwar scuba trip (1 day or weekend)</h2>
            <p className="section__description">
              A good trip plan increases your success rate. The earlier you reach Murudeshwar the previous evening,
              the calmer your scuba day will be.
            </p>
          </header>
          <div className="service-card">
            <div className="service-card__body">
              <h3 className="section__title netrani-h2">Option A: One-day scuba plan (best for nearby cities)</h3>
              <p className="service-lede service-lede--flush">
                If you are staying in Murudeshwar already, a one-day scuba plan is straightforward. Keep the previous
                night light, sleep early, and be ready for early reporting. After you return, you can relax at the
                beach or do temple darshan depending on your energy levels.
              </p>
              <p className="service-lede service-lede--spaced">
                If you want a timed itinerary, read{" "}
                <Link href="/blog/ultimate-murudeshwar-itinerary-guide">Murudeshwar one-day trip itinerary</Link>. It also
                explains why same-day arrival from far cities is risky for scuba, because the boats usually start early.
              </p>
              <h3 className="section__title netrani-h2">Option B: Weekend plan (recommended for Bangalore and longer travel)</h3>
              <p className="service-lede service-lede--flush">
                For travellers coming from Bangalore or other longer routes, a weekend plan reduces stress. Reach
                Murudeshwar on Saturday, do temple and beach in the evening, and keep Sunday morning for scuba. This
                gives you buffer time even if there is traffic, a delayed train, or a late check-in.
              </p>
              <p className="service-lede service-lede--spaced">
                If you are planning from Bangalore, use our detailed travel guide:{" "}
                <Link href="/blog/murudeshwar-trip-from-bangalore">Murudeshwar trip from Bangalore</Link>. For private
                vehicle planning, <Link href="/blog/bangalore-to-murudeshwar-by-cab">Bangalore to Murudeshwar by cab</Link>{" "}
                is the practical route and cost guide.
              </p>
              <h3 className="section__title netrani-h2">Transport tips (so you do not miss reporting)</h3>
              <p className="service-lede service-lede--flush">
                Early-morning reporting is the most common reason people feel stressed. If your stay is not walkable
                to the meeting point, plan transport in advance. You can use our{" "}
                <Link href="/contact">Murudeshwar taxi service</Link>,{" "}
                <Link href="/murudeshwar-railway-station-to-temple-taxi">
                  Murudeshwar Railway Station to Temple taxi
                </Link>
                , or read the detailed fare guide in{" "}
                <Link href="/blog/ultimate-murudeshwar-itinerary-guide">taxi rental Murudeshwar complete guide</Link>
                . Couples often prefer a bike for local sightseeing, but for scuba morning reporting, a taxi is more
                reliable for timings.
              </p>
              <h3 className="section__title netrani-h2">Finishing the trip: what else to do in Murudeshwar</h3>
              <p className="service-lede service-lede--flush">
                Scuba is usually the highlight, but a good Murudeshwar trip is balanced: temple, beach, food, and one
                adventure activity. If you want to add more activities, see{" "}
                <Link href="/blog/water-sports-murudeshwar">water sports and activities</Link>. If your focus
                is comfort, browse <Link href="/contact">accommodations</Link> and shortlist stays that match
                your morning reporting needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft netrani-faq relative overflow-hidden" id="faq">
        <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="service-container">
          <div className="mb-12 text-center">
            <span className="section__subtitle">FAQ</span>
            <h2 className="section__title">Scuba diving questions</h2>
            <p className="section__description">
              Answers about Murudeshwar scuba diving price, booking, swimming, and safety.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="service-section service-section--tight netrani-soft" id="sources">
        <div className="service-container">
          <div className="service-card">
            <div className="service-card__body">
              <span className="section__subtitle">Sources checked</span>
              <h2 className="section__title netrani-h2">What is verified—and what still needs a live check</h2>
              <ul className="service-ol font-semibold text-gray-400 space-y-2 mt-2">
                {pageData.sourcesChecked.map((source, idx) => (
                  <li key={idx}>
                    <a href={source.href} target="_blank" rel="noopener noreferrer">
                      {source.linkText}
                    </a>{" "}
                    {source.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section netrani-soft" id="guides">
        <div className="service-container">
          <header className="mb-12 text-center">
            <span className="section__subtitle">Guides</span>
            <h2 className="section__title">Helpful scuba reads</h2>
            <p className="section__description">
              Quick, practical guides for season, packages, stays, and what to expect as a beginner.
            </p>
          </header>
          <div className="service-links netrani-links">
            {pageData.guides.map((guide, idx) => (
              <div key={idx} className="service-link-card netrani-link-card">
                <Link
                  className="netrani-link-card__media"
                  aria-label={guide.alt}
                  href={guide.href}
                >
                  <img
                    alt={guide.alt}
                    loading="lazy"
                    width={1200}
                    height={675}
                    className="netrani-link-card__img"
                    style={{ color: "transparent" }}
                    src={guide.img}
                  />
                </Link>
                <div className="netrani-link-card__head">
                  <span className="netrani-link-card__icon" aria-hidden="true">
                    <i className={guide.icon}></i>
                  </span>
                  <h3>
                    <Link href={guide.href}>{guide.title}</Link>
                  </h3>
                  <span className="netrani-link-card__arrow" aria-hidden="true">
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
                <p>{guide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="service-cta" id="book">
        <div className="service-container">
          <div className="service-cta__card netrani-cta">
            <h2>Ready to dive?</h2>
            <p>
              Check the latest scuba price, slot availability, and inclusions before you travel. Ask who will operate
              the dive and receive payment. Pay at the dive centre on the day{" "}
              <strong>only when that is stated in your written confirmation</strong>.
            </p>
            <div className="service-cta__actions">
              <a
                href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d--red btn-3d--lg"
              >
                <i className="ri-whatsapp-line" aria-hidden="true"></i> Check Price &amp; Slots
              </a>
              <a href="tel:+917829975777" className="btn-3d btn-3d--lg netrani-btn-blue">
                <i className="ri-phone-line" aria-hidden="true"></i> Call: +91 78299 75777
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
